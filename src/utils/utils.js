import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    // compares old array of posts to new posts to avoid displaying duplicates
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
        ...prevResource,
        next: data.next,
        results: data.results.reduce((acc, cur) => {
            return acc.some((accResult) => accResult.id === cur.id)
            ? acc
            : [...acc, cur];
        }, prevResource.results),
        }));
    } catch (err) {}
};