<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Statamic\Entries\Entry;
use Barryvdh\Debugbar\Facade as Debugbar;
use Statamic\Tags\Collection\Collection;
use Statamic\Fields\Value;
// use Statamic\Fieldtypes\Bard;

class TestTag extends Collection
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
                    // $valueFormat = new Value(
                    //     $termine[$i]["beschreibung_basic_bard"],
                    //     "bard"
                    // );
                    // $termine[$i]["beschreibung_basic_bard"] = $valueFormat;
                }
                return $termine;
            })
            ->sortBy("datum")
            // ->where("datum", ">=", date("Y-m-d"))
            // ->toArray()
            ;

        $termine_get = Entry::query()
            ->where("collection", "veranstaltungen")
            ->get();




        Debugbar::debug("termine", $termine);
        Debugbar::debug("termine get", $termine_get);

        $test = collect($termine)->map(function ($item, $key) {
            // Debugbar::debug("map", $item, $key);

            return Entry::make()
                ->collection("veranstaltungen")
                // ->slug("test")
                // ->blueprint("veranstaltungen")
                ->data(["rep_termine" => $item])
                // ->data($item)
                ;
        });

        Debugbar::debug("test", $test);
        // return $termine;
        return $test;
    }
}
