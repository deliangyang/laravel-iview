<?php

namespace App\Listeners;

use App\Events\InviteEventHandler;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class InviteEventListener implements ShouldQueue
{

    public $connection = 'redis';

    public $queue = 'listeners';
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  InviteEventHandler  $event
     * @return void
     */
    public function handle(InviteEventHandler $event)
    {
        //
        var_dump(1);
    }
}
