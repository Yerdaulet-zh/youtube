"use client";

import React, { useState } from "react";
import { parseYouTube } from "@/utils/youtubeUrlParser"
import { useForm, SubmitHandler } from 'react-hook-form';;
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";

const VideoSchema = z.object({
  url: z
    .string()
    .min(1, { message: "The URL is too short. Please use an appropriate one." })
    .refine((url) => {
        try {
            if (new URL(url)) return true;
        } catch (error) {
            return false;
        }
    }, "The field should contain YouTube link"),
});

type VideoFormValues = z.infer<typeof VideoSchema>;


export const AddVideo = () => {
    const [videoId, setVideoId] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VideoFormValues>({
        resolver: zodResolver(VideoSchema),
    });

    const onSubmit: SubmitHandler<VideoFormValues> = async (data) => {
        // data.url contains the string automatically
        const url: URL = new URL(data.url);

        const parsedId = parseYouTube(url);

        if (!parsedId) return;

        setVideoId(parsedId);

        const postResponse = await fetch("/api/videos",
            {
                method: "POST",
                body: JSON.stringify({ videoId })
            }
        );
        console.log("POST response:", postResponse);

        const dataFromServer = await fetch("/api/videos",
            {
                method: "GET",
            }
        );

        const response = await dataFromServer.json();
        console.log(response);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("url")}
                    placeholder="paste the link"
                />
                <button type="submit">Upload</button>

                {/* // Display validation errors if any */}
                {errors.url && <p style={{ color: 'red' }}>{errors.url.message}</p>}
            </form>

            {videoId && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </>
    );
};
