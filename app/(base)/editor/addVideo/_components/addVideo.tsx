"use client";

import React, { useState } from "react";
import { parseYouTube } from "@/utils/youtubeUrlParser"
import { useForm, SubmitHandler } from 'react-hook-form';;
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import s from "./addVideo.module.css";

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

        const dataFromServer = await fetch("/api/videos",
            {
                method: "GET",
            }
        );

        const response = await dataFromServer.json();
    };

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div>
                    <input
                        {...register("url")}
                        placeholder="paste the link"
                        className={s.input}
                    />
                    {errors.url && <p className={s.error}>{errors.url.message}</p>}
                </div>
                <button type="submit" className={s.submitButton}>Upload</button>
            </form>

            {videoId && (
                <iframe
                    width="700"
                    height="350"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={s.iframe}
                />
            )}
        </div>
    );
};
