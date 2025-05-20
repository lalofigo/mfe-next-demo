// utils/groupArtists.tsx


export interface Artist {
    genre: string;
    description: string;
    name: string;
    email: string;
    image: string;
}

export function groupArtistsByInitial(artists: Artist[]) {
    return artists.reduce((acc: Record<string, Artist[]>, artist) => {
        const letter = artist.name.charAt(0).toUpperCase();
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(artist);
        return acc;
    }, {});
}
