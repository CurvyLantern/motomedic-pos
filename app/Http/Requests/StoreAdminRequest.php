<?php

namespace App\Http\Requests;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;

class StoreAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'adminName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.Admin::class,
            'password' => [
                'required',
                'confirmed',
                Rules\Password::defaults()
            ],
            'phone' => 'required',
        ];
    }
}
