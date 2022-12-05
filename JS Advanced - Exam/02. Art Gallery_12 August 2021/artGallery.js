class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }
        let article = this.listOfArticles.find(x => x.articleName == articleName);
        if (article && article.articleModel == articleModel) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(x => x.guestName == guestName);
        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;
        switch (personality) {
            case "Vip": points = 500; break;
            case "Middle": points = 250; break;
            default: points = 50; break;
        }
        this.guests.push({ guestName, points: points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(x => x.articleName == articleName);
        let guest = this.guests.find(x => x.guestName == guestName);
        if (!article || article.articleModel != articleModel) {
            throw new Error("This article is not found.");
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        if (!guest) {
            return "This guest is not invited.";
        }
        if (this.possibleArticles[articleModel] > guest.points) {
            return "You need to more points to purchase the article.";
        } else {
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
            article.quantity--;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria == "article") {
            let res = [];
            this.listOfArticles
                .map(x => res.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return `Articles information:\n${res.join('\n')}`;
        }
        if (criteria == "guest") {
            let res = [];
            this.guests
                .map(x => res.push(`${x.guestName} - ${x.purchaseArticle}`));
            return `Guests information:\n${res.join('\n')}`;
        }
    }
}


/*
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
*/
/*
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
*/
/*
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
*/
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
