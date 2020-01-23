import { commentQueries } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';
import { accessgroupQueries } from './resources/accessgroup/accessgroup.schema';

const Query = `
    type Query {
        ${commentQueries}
        ${postQueries}
        ${userQueries}
        ${accessgroupQueries}
    }
`;

export {
    Query
}