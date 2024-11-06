<?php

namespace App\Livewire;

use App\Models\User;
use Livewire\Component;

class Clicker extends Component
{

    
    public function createNewUser(){
       User::create([
        'name' => "test user 3",
        'email' => "test@test3 .com",
        'password' => '1234567'
       ]);
    }

    public function render()
    {
        $title = "Test";

        $users = User::all();

        return view('livewire.clicker',[
            'title' => $title,
            'users' => $users
        ]);
    }
}
