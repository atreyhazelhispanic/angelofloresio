export async function getOWPlayer(battletag) {
    let battleTag = battletag;

    const response = await fetch(`http://owapi.io/profile/pc/us/` + battleTag);

    if (!response.ok) {
        throw new Error("No player data found");
    }

    return response.json();
}