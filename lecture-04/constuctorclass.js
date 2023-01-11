class Song
{
    constructor(title,auther)
    {
        this.title = title;
        this.auther = auther;
    }
}

const mySong = new Song("Bohemian Rhapsody","Queen");
console.log(mySong.title);