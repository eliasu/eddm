<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Statamic\Entries\Entry;
use Barryvdh\Debugbar\Facade as Debugbar;

class LatestTermine extends Tags
{
    /**
     * The {{ latest_termine }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        $termine = Entry::query()
            ->where("collection", "veranstaltungen")
            ->get()
            ->map(function ($entry) {
                // Debugbar::debug("entry", $entry);
                // Debugbar::debug("entry title", $entry->get("title"));
                $termine = $entry->get("rep_termine");
                for ($i = 0; $i < count($termine); $i++) {
                    $termine[$i]["parent_title"] = $entry->get("title");
                }
                return $termine;
            })
            ->sortBy("datum")
            ->where("datum", ">=", date("Y-m-d"))
            ;

        if ($limit = $this->params->int("limit")) {
            $termine = $termine->take($limit);
        }

        return collect($termine)->map(function ($item, $key) {
            return Entry::make()
                ->collection("veranstaltungen")
                ->data(["rep_termine" => $item]);
        });
    }
}
