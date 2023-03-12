import { type } from "os";
import React from "react";
import { PassThrough } from "stream";

const fetchPage = async (pageId: string) => {
    const response = await fetch(`http://127.0.0.1:8000/store/products/?page=${pageId}`);
    const { results } = await response.json();
    return results;
};

type PageProps = {
    pageId: string;
};

export default async function Page({ pageId }: PageProps) {
    return (
        <>
        </>
    );
}