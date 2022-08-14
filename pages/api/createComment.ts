// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
type Data = {
    message: string;
    error?: any 
};

const config = {
    dataset: process.env.NEXT_SANITY_PUBLIC_DATASET || "production",
    projectId: process.env.NEXT_SANITY_PUBLIC_PROJECT_ID || "projectId",
    apiVersion: "2021-03-25",
    useCon: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { _id, name, email, comment } = JSON.parse(req.body);
    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id,
            },
            name,
            email,
            comment,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not submit content", error });
    }
    console.log("Content submitted")
    res.status(200).json({ message: "Content submitted" });
}
