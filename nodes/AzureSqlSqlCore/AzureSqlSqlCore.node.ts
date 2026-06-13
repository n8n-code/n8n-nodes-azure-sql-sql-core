import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlSqlCore implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL SQL Core',
                name: 'N8nDevAzureSqlSqlCore',
                icon: { light: 'file:./azure-sql-sql-core.png', dark: 'file:./azure-sql-sql-core.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Manages Azure SQL Database CRUD, recommendations, and operations.',
                defaults: { name: 'Azure SQL SQL Core' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlSqlCoreApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
