import { MessageSquareMore, Linkedin, Github } from 'lucide-react';
import React from "react";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className=''>
      <ul className="flex pb-4 gap-5 mt-3 ">
        <li className='bg-purple-400 rounded-full p-2 border-2 border-purple-600 hover:bg-opacity-50'>
          <Link href="https://www.linkedin.com/in/chrisbmineiro" target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li className='bg-purple-400 rounded-full p-2 border-2 border-purple-600 hover:bg-opacity-50'>
          <Link
            href="http://whatsapp.me/5511985154394"
            
            target="_blank"
          >
            <MessageSquareMore />
          </Link>
        </li>
        <li className='bg-purple-400 rounded-full p-2 border-2 border-purple-600 hover:bg-opacity-50'>
          <a
            href="https://github.com/chrisbmineiro"
            title="meu github"
            target="_blank"
          >
            <Github />
          </a>
        </li>
      </ul>
    </div>
  );
}
