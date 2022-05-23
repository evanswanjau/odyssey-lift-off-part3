import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
    query getTrack($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            numberOfViews
            modules {
                id
                title
                length
            }
            description
        }
    }
`;

/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = ({ trackId }) => {
    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId },
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    );
};
export default Track;
