function solution(input) {
    let voting = {
        upvote: () => { this.upvotes++; },
        downvote: () => { this.downvotes++ },
        score: () => {
            let up = this.upvotes;
            let down = this.downvotes;
            let addedNum = 0;
            let scorePoint = up - down;
            let totalPoint = up + down;
            if (totalPoint > 50) {
                addedNum = Math.ceil(Math.max(up, down) * 0.25);
            }
            let rating = "new";
            if (up > 0.66 * totalPoint && totalPoint > 10) {
                rating = "hot";
            } else if (totalPoint > 100 && scorePoint >= 0) {
                rating = "controversial";
            } else if (scorePoint < 0 && totalPoint >= 10) {
                rating = "unpopular";
            };
            return [up + addedNum, down + addedNum, scorePoint, rating];
        }

    }
    return voting[input]();
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']