<?php

namespace App\Tags;

// use Statamic\Tags\Collection\Collection;
use Statamic\Tags\Tags;
use Statamic\Entries\Entry;
use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Support\Collection;
use Carbon\Carbon;
class SectionCollection extends Tags
{
    // class SectionCollection extends Collection

    // var $getRelAuthors;
    var $getDate;

    var $getFirstTitleLetter;
    var $getAuthor;
    var $getAuthorLastNameFirst;
    var $getReleaseDate;

    function __construct()
    {
        // $this->getRelAuthors = function ($entry) {
        //     $title = $this->getRelatedAuthorTitleFromEntry($entry);
        //     // Debugbar::debug("data get rel", $data, $id, $title);
        //     return $title;
        // };
        $this->getDate = function ($entry) {
            $data = $entry->data()->get("erschienen");
            $carbon = new Carbon($data);
            // Debugbar::debug("data get date", $carbon->year);
            return $carbon->year;
        };

        $this->getFirstTitleLetter = function ($entry) {
            $data = strtolower($entry->get("title")[0]);
            // Debugbar::debug("data get date", $data);
            return $data;
        };
        $this->getAuthor = function ($entry) {
            // Debugbar::debug("get author", $entry, $lastname);
            $data = $this->getRelatedAuthorTitleFromEntry($entry, false);
            // Debugbar::debug("get author", $entry, $data);
            return $data;
        };
        $this->getAuthorLastNameFirst = function ($entry) {
            // Debugbar::debug("get author", $entry, $lastname);
            $data = $this->getRelatedAuthorTitleFromEntry($entry, true);
            // Debugbar::debug("get author", $entry, $data);
            return $data;
        };
    }

    public function index()
    {
         if(count($this->context->get("data")) == 0) {
            Debugbar::debug("no matches");
            // TODO wir brauchen noch eine no matches anzeige
            return ["title" => "Leider keine Ergebnisse"];
         }

        // if($this->context->get("data"))
         $entries = $this->context->get("data");





        $entries = collect($entries)
            ->filter(function ($entry) {
                // Debugbar::debug("filter", $entry);
                return $entry->published() == true;
            })
            ->flatten()
            ->all();

        // $test = collect($entries);
        // $test = $test->where("published", false);
        // $test = $entries[0]->published();
        // Debugbar::debug("index section colleciotn entries", $entries);
        // Debugbar::debug("index section colleciotn test", $test);
        // Debugbar::debug("index section colleciotn items", $test->flatten());
        // Debugbar::debug(
        //     "index section colleciotn items flatten",
        //     $test->flatten()->all()
        // );
        // // Debugbar::debug("index section colleciotn items-all", $test->items->all());
        // Debugbar::debug("index section colleciotn test", $test->toArray());

        switch ($this->params->get("section")) {
            case "alpha":
                // $sections = $this->sectioning($entries);
                // $result = $this->sectioningLetters($entries);
                $result = $this->sectioning(
                    $entries,
                    $this->getFirstTitleLetter
                );
                // Debugbar::debug("relsut", $result);
                return $result;
                break;
            case "date":
                // $sections = $this->sectioning($entries);
                $sorted = $this->sortEntries($entries, $this->getDate);
                return $result = $this->sectioning($sorted, $this->getDate);

                break;
            case "author":
                // $sections = $this->sectioning($entries);

                // return $result = $this->sortEntries($entries, 'erschienen');;
                $sorted = $this->sortEntries($entries, $this->getAuthorLastNameFirst);
                return array_reverse($this->sectioning($sorted, $this->getAuthor));

                break;

            default:
                # code...
                break;
        }
    }

    private function sortEntries($entries, $getFunc)
    {
        $entries = collect($entries);
        $original = $entries->map(function ($el) use ($getFunc) {
            return $getFunc($el);
        });
        // Debugbar::debug("sort original", $original);

        $result = $entries->sortBy(function ($entry, $key) use ($getFunc) {
            $data = $getFunc($entry);

            // $username = $_GET['user'] ?? 'nobody';
            // Debugbar::debug("data result", $data);
            return $data;
        });

        $after = $result->map(function ($el) use ($getFunc) {
            return $getFunc($el);
        });
        // Debugbar::debug("sort after", $after);

        // $result->map(function ($el) {
        //     Debugbar::debug("sorted result each", $el->get('erschienen'));
        // });
        // ->all()
        // ->sort()
        // ->where('datum', '>=', date('Y-m-d'))
        // ->toArray()
        // Debugbar::debug("sorted result", $result);
        // Debugbar::debug("sorted result", $result->flatten()->all());
        return $result->reverse()->flatten()->all();
    }

    private function sectioning($entries, $sectionFunc)
    {

        $entries = collect($entries);

        $original = $entries->map(function ($el) use ($sectionFunc) {
            return $sectionFunc($el);
        });
        // Debugbar::debug("section original", $original);

        // $entries->map(function ($el) {
        //     Debugbar::debug(" section sorted result each", $el->get('erschienen'));
        // });

        $currentSection = $sectionFunc($entries[0]);

        // $currentSection = reset($entries)->get('authors');

        $section = [
            "title" => $currentSection,
            "entries" => [],
        ];
        $sections = [];

        foreach ($entries as &$entry) {
            //  Debugbar::debug("currentsection", $currentSection);
            $entrySection = $sectionFunc($entry);
            if ($entrySection === $currentSection) {
                array_push($section["entries"], $entry);
            } else {
                array_push($sections, $section);
                $currentSection = $entrySection;
                $section["title"] = $currentSection;
                $section["entries"] = [];
                array_push($section["entries"], $entry);
            }

            // Debugbar::debug("section", $sections);
            // Debugbar::debug("sections", $sections);
        }
        unset($entry);
        array_push($sections, $section);

        // Debugbar::debug("sections", $sections);
        return $sections;
    }

    private function getRelatedAuthorTitleFromEntry($entry, bool $lastname)
    {
        // Debugbar::debug("author", $entry);
        $data = $entry->data()->get("rep_rel_authors");
        // Debugbar::debug("data raw", $data, $data[0]);
        $data = collect($data);
        // Debugbar::debug("data colelct", $data->all(), $data->get('rel_ID'));
        // Debugbar::debug("data collect", $data->all());
        $data = $data->where("mitwirkungstyp", "Autor");
        // Debugbar::debug("where raw", $data);

        if ($data->first()) {
            // Debugbar::debug("has element");
            $id = $data->first()["rel_ID"];
            $title = Entry::find($id)
                ->data()
                ->get("title");

            if($lastname) {
                $nameArray = explode(" ", $title);
                // Debugbar::debug("name array", $nameArray);
                $lastNameFirst = "";
                for ($i=count($nameArray)-1; $i >=0; $i--) {
                    // Debugbar::debug("part", $i, $nameArray[$i]);
                    $lastNameFirst .= $nameArray[$i];
                }
                $title = $lastNameFirst;
                // Debugbar::debug("title", $title);
            }
            return $title;
        } else {
            return "## DANGER NO AUTHOR SET";
        }
    }
}
