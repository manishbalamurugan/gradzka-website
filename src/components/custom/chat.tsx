"use client"

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';


interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    // Example bot message
    {
      id: 0,
      text: "Hey, I'm Luka, I'm an AI assistant here at Advanced Arthritis Solutions. If you would like to learn more about conditions treated here at Advanced Arthritis Solutions, please feel free to ask more!",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: messages.length,
      text: inputValue,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="w-auto h-full min-h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="p-6">
        <div className="text-center text-lg font-semibold">Luka</div>
        <div className="text-center text-sm">AI Assistant at Advanced Arthritis Solutions</div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`flex items-center text-sm max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-300 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-gray-200 p-4">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            className="ml-2 text-blue-500"
            onClick={handleSendMessage}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
