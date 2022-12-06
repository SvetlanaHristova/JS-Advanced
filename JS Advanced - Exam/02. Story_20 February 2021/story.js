class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let countLikes = this._likes.length;
        let str = "";
        switch (countLikes) {
            case 0: str = `${this.title} has 0 likes`; break;
            case 1: str = `${this._likes[0]} likes this story!`; break;
            default: str = `${this._likes[0]} and ${this._likes.length - 1} others like this story!`; break;
        }
        return str;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes = this._likes.filter(x => x != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this._comments.find(x => x.Id == id);
        if (!comment) {
            this._comments.push({
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: [],
            });
            return `${username} commented on ${this.title}`;
        } else {
            comment.Replies.push({
                Id: `${comment.Id}.${comment.Replies.length + 1}`,
                Username: username,
                Content: content,
            });
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        let text = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;
        if (this._comments.length == 0) {
            return text;
        }
        let res = [];
        switch (sortingType) {
            case 'asc': this._comments.sort((a, b) => a.Id - b.Id); break;
            case 'desc': this._comments.sort((a, b) => b.Id - a.Id); break;
            case 'username': this._comments.sort((a, b) => a.Username.localeCompare(b.Username)); break;
        }
        this._comments.map(x => {
            res.push(`-- ${x.Id}. ${x.Username}: ${x.Content}`);
            if (x.Replies.length > 0) {
                switch (sortingType) {
                    case 'asc': x.Replies.sort((a, b) => a.Id - b.Id); break;
                    case 'desc': x.Replies.sort((a, b) => b.Id - a.Id); break;
                    case 'username': x.Replies.sort((a, b) => a.Username.localeCompare(b.Username)); break;
                }
                x.Replies.map(y => res.push(`--- ${y.Id}. ${y.Username}: ${y.Content}`));
            }
        });
        return `${text}\n${res.join('\n')}`;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
art.like("Jessy");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
console.log(art.toString('desc'));
art.comment("Anny", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 2));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

