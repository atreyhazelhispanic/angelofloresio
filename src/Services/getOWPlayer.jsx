export async function getOWPlayer(battletag) {
    let battleTag = battletag;

    const response = await fetch(process.env.REACT_APP_OWAPI_URI + battleTag);

    if (!response.ok) {
        throw new Error("No player data found");
    }

    return response.json();
}