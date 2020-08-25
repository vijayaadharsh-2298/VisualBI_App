const searchSelector = (albums,text) => {
    return albums.filter(alb => {
        const textMatch = alb.title.toString().toLowerCase().includes(text.toString().toLowerCase());

        return textMatch;
    })
}

export default searchSelector;