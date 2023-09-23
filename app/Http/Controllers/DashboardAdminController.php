<?php

namespace App\Http\Controllers;

use App\Models\Asrama;
use App\Models\Students;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardAdminController extends Controller
{
    public function index()
    {
        $user = User::where('role_id', 2)->count();
        $member = Students::get()->count();
        $asrama = Asrama::get()->skip(1)->count();
        return Inertia::render('DashboardAdmin', ['user' => $user, 'member' => $member, 'asrama' => $asrama]);
    }
}
