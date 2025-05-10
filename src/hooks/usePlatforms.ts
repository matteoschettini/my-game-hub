import useData from "@/hooks/useData.ts";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

function usePlatforms() {
    return useData<Platforms>("/platforms/lists/parents");
}


export default usePlatforms;