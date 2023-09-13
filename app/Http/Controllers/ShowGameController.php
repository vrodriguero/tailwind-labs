<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ShowGameController extends Controller
{
    public function __invoke($level): Response
    {
        return Inertia::render('Game', [
            'currentLevel' => intval($level),
        ]);
    }
}
