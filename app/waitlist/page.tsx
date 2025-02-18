"use client"

import { useState } from 'react'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Selection} from "@nextui-org/react";
import { Button } from '@/components/ui/button'


export default function JoinWaitlist() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        careType: '',
        paymentOption: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    interface FormState {
        name: string;
        email: string;
        phone: string;
        careType: string;
        paymentOption: string;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission
    }
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["personal care"]));
  
    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys],
    );
    return (
       
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-4 mt-24">Join Our Waitlist</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name" className="text-sm font-medium">Type of Care</label>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className="text-left py-8 w-fit capitalize break-words whitespace-normal" variant="outline">
                                {selectedValue || "No service selected"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            className='bg-white shadow-md'
                            disallowEmptySelection={false}
                            aria-label="Multiple selection example"
                            closeOnSelect={false}
                            selectedKeys={selectedKeys}
                            selectionMode="multiple"
                            variant="flat"
                            onSelectionChange={setSelectedKeys}
                        >
                            <DropdownItem key="personal care">Personal Care</DropdownItem>
                            <DropdownItem key="companionship">Companionship</DropdownItem>
                            <DropdownItem key="housekeeping">Housekeeping</DropdownItem>
                            <DropdownItem key="medication reminders">Medication Reminders</DropdownItem>
                            <DropdownItem key="respite">Respite Care</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <span className="block text-sm font-medium text-gray-700">Payment Option</span>
                    <div className="mt-2 space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="paymentOption"
                                value="medicaid"
                                checked={form.paymentOption === 'medicaid'}
                                onChange={handleChange}
                                className="h-4 w-4 text-teal-600 border-gray-300"
                                required
                            />
                            <span className="ml-2">Medicaid-approved</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="paymentOption"
                                value="private-pay"
                                checked={form.paymentOption === 'private-pay'}
                                onChange={handleChange}
                                className="h-4 w-4 text-teal-600 border-gray-300"
                                required
                            />
                            <span className="ml-2">Exploring private pay</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="mb-24 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}