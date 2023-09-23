<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Asrama;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */

    public function create(): Response
    {
        $asrama = Asrama::get();
        $role = Role::get();
        return Inertia::render('Users/UserCreate', ['asrama' => $asrama, 'role' => $role]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'asrama_id' => 'required',
            'role_id' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'asrama_id' => $request->asrama_id,
            'role_id' => $request->role_id,
        ]);

        return to_route('users')->with('message', 'Adding New User Successfully');
    }
}
