import { CommentModel } from "../models/CommentModel";
import { PostModel } from "../models/PostModel";
import { UserModel } from "../models/UserModel";
import { AccessGroupModel } from "../models/AccessGroupModel";

export interface ModelsInterface {

    Comment: CommentModel;
    Post: PostModel;
    User: UserModel;
    AccessGroup: AccessGroupModel;

}