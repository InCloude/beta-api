import { AccessGroupModel, AccessGroupInstance } from "../../models/AccessGroupModel";
import { DataLoaderParam } from "../../interfaces/DataLoaderParamInterface";
import { RequestedFields } from "../ast/RequestedFields";

export class AccessGroupLoader {

    static batchAccesGroups ({ AccessGroup, params, requestedFields }: { AccessGroup: AccessGroupModel; params: DataLoaderParam<number>[]; requestedFields: RequestedFields; }): Promise<AccessGroupInstance[]> {

        let ids: number[] = params.map(param => param.key);

        return Promise.resolve(
            AccessGroup.findAll({
                where: { id: { $in: ids } },
                attributes: requestedFields.getFields(params[0].info, {keep: ['id'], exclude: ['users']})
            })
        );
    }

}