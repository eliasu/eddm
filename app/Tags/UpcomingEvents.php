<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Statamic\Entries\Entry;
use \Barryvdh\Debugbar\Facades\Debugbar;

use Illuminate\Support\Collection;
use Carbon\Carbon;
// use Statamic\Tags\Collection\Collection;

class UpcomingEvents extends Tags
{
    /**
     * The {{ upcoming_events }} tag.
     *
     * @return string|array
     */


    function __construct()
    {
    }

    public function index()
    {
        $events = Entry::query()
            ->where("collection", "events")
            ->where("published", '!=', false)
            ->where("show_in_eventlist", '!=', false)
            ->get();

        // $additional_events = [];

        $future_events_ref = [];


        // echo "<pre>";

        $events->each(function ($value, $key) use (&$future_events_ref) {
            $event = $value;
            $future_event_ref = [];

            if ($event->get('date_type') == "single dates") {
                $future_date_indexes = $this->getFutureIndexes($event);
                // Debugbar::debug("hallo", $future_date_indexes);

                if ($future_date_indexes) {
                    for ($i = 0; $i < count($future_date_indexes); $i++) {
                        $future_event_ref = array(
                            "id" => $event->id,
                            "date_index" => $future_date_indexes[$i],
                            "sorting_date" => (new Carbon($event->get("dates")[$future_date_indexes[$i]]["date_field"]))
                            // ->hour(23)->minutes(59)
                        );
                        array_push($future_events_ref, $future_event_ref);
                    }
                }
            } else {
                $start = $event->get("date_range")["start"];
                $end = $event->get("date_range")["end"];
                // $carbonTime = (new Carbon($termin->get("date_range")["end"]))->hour(23)->minutes(59);

                if ($this->isFuture($start)) {
                    $future_event_ref = array(
                        "id" => $event->id,
                        "date_index" => "start",
                        "sorting_date" => (new Carbon($start))
                    );
                    array_push($future_events_ref, $future_event_ref);
                } else {
                    if ($this->isFuture($end)) {
                        $future_event_ref = array(
                            "id" => $event->id,
                            "date_index" => "end",
                            "sorting_date" => Carbon::now()
                        );
                        array_push($future_events_ref, $future_event_ref);
                    }
                }

                // array_push($future_events_ref, $future_event_ref);
            }
        });



        // $sorted_events = $filtered_events->sortBy("relevant_date");
        // $single_dates = $sorted_events->where("date_type", "single dates");
        // $range_dates = $sorted_events->where("date_type", "date range");

        // $final = $range_dates->concat($single_dates);

        // if ($limit = $this->params->int("limit")) {
        //     $final = $final->take($limit);
        // }

        // $final->map(function ($el) {
        //     if ($el->get('date_type') == "single dates") {

        //         Debugbar::debug($el->get('dates')[0]["date_field"] . "   ->" . $el->get('title'));
        //         Debugbar::debug($el->get('dates'));
        //         Debugbar::debug($el->id);
        //     } else {
        //         Debugbar::debug($el->get('relevant_date') . "   ->" . $el->get('title'));
        //     }
        // });

        // $final = $final->flatten()->all();


        // Debugbar::debug("as array");


        // for ($i = 0; $i < count($final); $i++) {
        //     if ($final[$i]->get('date_type') == "single dates") {

        //         Debugbar::debug($final[$i]->get('dates')[0]["date_field"] . "   ->" . $final[$i]->get('title'));
        //     } else {
        //         Debugbar::debug($final[$i]->get('relevant_date') . "   ->" . $final[$i]->get('title'));
        //     }
        // }



        // Debugbar::debug("final dates", $final);

        // $final = ["c9a19025-b41e-4aca-a280-021a36785ee6", "62e72cd0-6c2e-4025-9f22-50b86094e37d", "b79770b0-1b80-46b1-b623-da8dc338479f"];

        // // Debugbar::debug("item", $final[10]->get("dates"));
        // return $final;

        Debugbar::debug("futures ref", $future_events_ref);
        $sorted_events = collect($future_events_ref)->sortBy("sorting_date");


        // return $future_events_ref;
        return $sorted_events;
    }

    /**
     * The {{ upcoming_events:example }} tag.
     *
     * @return string|array
     */
    public function example()
    {
        //
    }


    private function getFutureIndexes($termin)
    {

        $future_dates = [];

        for ($j = 0; $j < count($termin->get("dates")); $j++) {
            // echo $termin->get("dates")[$j]["date_field"] . "\n";
            $time = $termin->get("dates")[$j]["date_field"];
            // print_r($carbonTime->toDateTimeString() . "\n");
            if ($this->isFuture($time)) {
                // echo "its in the future! \n";

                array_push(
                    $future_dates,
                    $j
                );
            }
        }
        return $future_dates;
    }


    private function isFuture($time)
    {
        $nowDate = Carbon::now();
        $carbonTime = (new Carbon($time))->hour(23)->minutes(59);
        return $carbonTime->gt($nowDate);
    }
}
