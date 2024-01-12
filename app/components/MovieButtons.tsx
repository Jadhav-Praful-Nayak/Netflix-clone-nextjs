"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayvideoModel";

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    
    
    release: number;
    age: number;
    duration: number;
    id:number;
  }

export default function MovieButtons({
    overview,
    title,
    youtubeUrl,
    age,
    duration,
    release,
    id,
    
  }: iAppProps){
    const [open,setOpen]=useState(false);
    return(
        <>
        <Button onClick={()=>setOpen(true)} className="text-lg font-medium">
            <PlayCircle className="mr-2 w-6 h-6"/>Play
        </Button>
        <Button onClick={()=>setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
            <InfoIcon className="mr-2 w-6 h-6"/>Learn More
        </Button>
        <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={id}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        release={release}
      />
        </>
    )
}