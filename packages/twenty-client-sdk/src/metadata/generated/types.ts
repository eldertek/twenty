export default {
    "scalars": [
        1,
        2,
        4,
        8,
        9,
        12,
        14,
        16,
        19,
        26,
        28,
        29,
        36,
        40,
        42,
        49,
        65,
        73,
        83,
        89,
        102,
        106,
        107,
        109,
        114,
        120,
        126,
        131,
        137,
        140,
        141,
        142,
        143,
        151,
        153,
        167,
        171,
        173,
        175,
        222,
        223,
        250,
        254,
        255,
        257,
        268,
        274,
        278,
        282,
        285,
        292,
        309,
        311,
        317,
        319,
        332,
        339,
        340,
        341,
        353,
        355,
        372,
        373,
        374,
        375,
        376,
        377,
        379,
        380,
        381,
        384,
        385,
        387,
        390,
        395,
        399,
        408,
        415,
        417,
        420,
        424,
        425,
        430,
        434,
        457,
        459,
        460,
        468,
        480,
        482,
        488,
        493,
        516,
        529,
        530,
        532,
        559,
        561,
        563,
        628,
        648,
        655,
        657,
        661,
        672,
        678,
        679,
        681,
        682,
        684,
        685,
        686,
        689,
        690,
        691,
        696,
        698,
        701,
        706,
        707,
        708,
        711,
        712
    ],
    "types": {
        "AccessGroupPropagationProgress": {
            "isInProgress": [
                1
            ],
            "remainingRecordCount": [
                2
            ],
            "totalRecordCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "Boolean": {},
        "Int": {},
        "ActivateWorkspaceInput": {
            "displayName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                4
            ],
            "operationSignature": [
                339
            ],
            "queryId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Agent": {
            "applicationId": [
                559
            ],
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystem": [
                1
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                339
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                339
            ],
            "roleId": [
                559
            ],
            "triggers": [
                339
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannel": {
            "applicationId": [
                559
            ],
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isAccessible": [
                1
            ],
            "isCustom": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "roleIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Float": {},
        "AgentChatChannelAssignmentFilter": {},
        "AgentChatChannelRole": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelSummary": {
            "assignedCount": [
                2
            ],
            "assignedToMeCount": [
                2
            ],
            "channelId": [
                559
            ],
            "doneCount": [
                2
            ],
            "hasUnreadAssignedToMe": [
                1
            ],
            "hasUnreadOpen": [
                1
            ],
            "mentionedCount": [
                2
            ],
            "needsInputCount": [
                2
            ],
            "openCount": [
                2
            ],
            "snoozedCount": [
                2
            ],
            "unassignedCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelThreadFilter": {},
        "AgentChatChannelThreadIds": {
            "endCursor": [
                4
            ],
            "hasNextPage": [
                1
            ],
            "threadIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatChannelThreadStatus": {},
        "AgentChatEvent": {
            "event": [
                339
            ],
            "threadId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatInboxAction": {},
        "AgentChatOpenThreadsSummary": {
            "assignedThreadCount": [
                2
            ],
            "assignedToMeThreadCount": [
                2
            ],
            "hasUnreadAssignedThread": [
                1
            ],
            "hasUnreadMentionThread": [
                1
            ],
            "hasUnreadOpenThread": [
                1
            ],
            "mentionThreadCount": [
                2
            ],
            "needsInputThreadCount": [
                2
            ],
            "openThreadCount": [
                2
            ],
            "unassignedThreadCount": [
                2
            ],
            "unreadOpenThreadCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AgentChatThread": {
            "contextWindowTokens": [
                2
            ],
            "conversationSize": [
                2
            ],
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "id": [
                19
            ],
            "isAssistantParticipant": [
                1
            ],
            "title": [
                4
            ],
            "totalCacheReadTokens": [
                2
            ],
            "totalInputCredits": [
                8
            ],
            "totalInputTokens": [
                2
            ],
            "totalOutputCredits": [
                8
            ],
            "totalOutputTokens": [
                2
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "ID": {},
        "AgentChatThreadParticipant": {
            "archivedAt": [
                223
            ],
            "id": [
                559
            ],
            "isSubscribed": [
                1
            ],
            "lastMentionedAt": [
                223
            ],
            "lastReadAt": [
                223
            ],
            "mentionsResolvedAt": [
                223
            ],
            "snoozedUntil": [
                223
            ],
            "threadId": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "AgentIdInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessage": {
            "agentId": [
                559
            ],
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "isBuiltInAssistant": [
                1
            ],
            "parts": [
                23
            ],
            "processedAt": [
                223
            ],
            "reactions": [
                24
            ],
            "role": [
                4
            ],
            "senderApplicationId": [
                559
            ],
            "senderUserWorkspaceId": [
                559
            ],
            "senderWorkspaceMemberId": [
                559
            ],
            "status": [
                4
            ],
            "threadId": [
                559
            ],
            "turnId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessagePart": {
            "createdAt": [
                223
            ],
            "errorMessage": [
                4
            ],
            "fileFilename": [
                4
            ],
            "fileId": [
                559
            ],
            "fileMediaType": [
                4
            ],
            "fileUrl": [
                4
            ],
            "id": [
                559
            ],
            "messageId": [
                559
            ],
            "orderIndex": [
                2
            ],
            "providerExecuted": [
                1
            ],
            "providerMetadata": [
                339
            ],
            "reasoningContent": [
                4
            ],
            "sourceDocumentFilename": [
                4
            ],
            "sourceDocumentMediaType": [
                4
            ],
            "sourceDocumentSourceId": [
                4
            ],
            "sourceDocumentTitle": [
                4
            ],
            "sourceUrlSourceId": [
                4
            ],
            "sourceUrlTitle": [
                4
            ],
            "sourceUrlUrl": [
                4
            ],
            "state": [
                4
            ],
            "textContent": [
                4
            ],
            "toolCallId": [
                4
            ],
            "toolInput": [
                339
            ],
            "toolName": [
                4
            ],
            "toolOutput": [
                339
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentMessageReactionSummary": {
            "agentIds": [
                559
            ],
            "emoji": [
                4
            ],
            "hasAssistantReacted": [
                1
            ],
            "workspaceMemberIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "AgentRun": {
            "canReadThread": [
                1
            ],
            "createdAt": [
                223
            ],
            "creatorName": [
                4
            ],
            "creatorSource": [
                4
            ],
            "credits": [
                8
            ],
            "endedAt": [
                223
            ],
            "errorMessage": [
                4
            ],
            "id": [
                559
            ],
            "input": [
                4
            ],
            "inputTokens": [
                2
            ],
            "modelId": [
                4
            ],
            "outputTokens": [
                2
            ],
            "reply": [
                4
            ],
            "startedAt": [
                223
            ],
            "status": [
                26
            ],
            "threadId": [
                559
            ],
            "threadTitle": [
                4
            ],
            "toolNames": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AgentTurnStatus": {},
        "AggregateChartConfiguration": {
            "aggregateFieldMetadataId": [
                559
            ],
            "aggregateOperation": [
                28
            ],
            "configurationType": [
                689
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "filter": [
                339
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "label": [
                4
            ],
            "numberFormat": [
                153
            ],
            "prefix": [
                4
            ],
            "ratioAggregateConfig": [
                452
            ],
            "suffix": [
                4
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AggregateOperations": {},
        "AiChatAssistantMode": {},
        "AiChatAssistantProfile": {
            "avatarColor": [
                4
            ],
            "avatarFace": [
                4
            ],
            "avatarShape": [
                4
            ],
            "displayName": [
                4
            ],
            "isAvatarAnimated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AiChatAssistantProfileInput": {
            "avatarColor": [
                4
            ],
            "avatarFace": [
                4
            ],
            "avatarShape": [
                4
            ],
            "displayName": [
                4
            ],
            "isAvatarAnimated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AiChatUsage": {
            "consumedValue": [
                109
            ],
            "kind": [
                4
            ],
            "limitValue": [
                109
            ],
            "periodEnd": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "AiChatUserCreditsUsage": {
            "consumedValue": [
                109
            ],
            "limitValue": [
                109
            ],
            "periodEnd": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "AiDataPolicy": {
            "isProductImprovementDataSharingEnabled": [
                1
            ],
            "isZeroDataRetentionRequired": [
                1
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AiDataPolicyInput": {
            "isProductImprovementDataSharingEnabled": [
                1
            ],
            "isZeroDataRetentionRequired": [
                1
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AiModelTier": {},
        "AiRunUsage": {
            "inputTokens": [
                2
            ],
            "outputTokens": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "AiSystemPromptPreview": {
            "estimatedTokenCount": [
                2
            ],
            "sections": [
                39
            ],
            "__typename": [
                4
            ]
        },
        "AiSystemPromptSection": {
            "content": [
                4
            ],
            "estimatedTokenCount": [
                2
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AllMetadataName": {},
        "Analytics": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AnalyticsType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "ApiKey": {
            "createdAt": [
                223
            ],
            "expiresAt": [
                223
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "revokedAt": [
                223
            ],
            "role": [
                474
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "ApiKeyForRole": {
            "expiresAt": [
                223
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "revokedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "ApiKeyToken": {
            "token": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppConnection": {
            "accessToken": [
                4
            ],
            "authFailedAt": [
                4
            ],
            "authFailedReason": [
                4
            ],
            "externalAccountId": [
                4
            ],
            "handle": [
                4
            ],
            "id": [
                19
            ],
            "name": [
                4
            ],
            "providerName": [
                4
            ],
            "providerType": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "userWorkspaceId": [
                4
            ],
            "visibility": [
                4
            ],
            "workspaceMemberId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppKeyValue": {
            "key": [
                4
            ],
            "scope": [
                49
            ],
            "value": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "AppKeyValueScope": {},
        "AppMessageAttachmentInput": {
            "fileId": [
                559
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageFolderInput": {
            "externalId": [
                4
            ],
            "isSynced": [
                1
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageInput": {
            "attachments": [
                50
            ],
            "externalId": [
                4
            ],
            "folderExternalIds": [
                4
            ],
            "isRead": [
                1
            ],
            "participants": [
                53
            ],
            "receivedAt": [
                223
            ],
            "subject": [
                4
            ],
            "text": [
                4
            ],
            "threadExternalId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AppMessageParticipantInput": {
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "personId": [
                559
            ],
            "role": [
                381
            ],
            "workspaceMemberId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Application": {
            "agents": [
                6
            ],
            "applicationRegistration": [
                85
            ],
            "applicationRegistrationId": [
                559
            ],
            "applicationVariables": [
                88
            ],
            "autoUpgrade": [
                1
            ],
            "availablePackages": [
                339
            ],
            "canBeUninstalled": [
                1
            ],
            "commandMenuItems": [
                166
            ],
            "content": [
                60
            ],
            "createdAt": [
                223
            ],
            "defaultLogicFunctionRole": [
                474
            ],
            "defaultRoleId": [
                4
            ],
            "description": [
                4
            ],
            "frontComponents": [
                299
            ],
            "grantRoleId": [
                559
            ],
            "grantedIframeMediaPermissions": [
                321
            ],
            "healthCheckLogicFunctionId": [
                559
            ],
            "id": [
                559
            ],
            "isUninstallBlockedByOtherWorkspaceInstallations": [
                1
            ],
            "logicFunctions": [
                352
            ],
            "logoFileId": [
                559
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "objects": [
                401
            ],
            "packageJsonChecksum": [
                4
            ],
            "packageJsonFileId": [
                559
            ],
            "requestedIframeMediaPermissions": [
                321
            ],
            "runOnUserPreferences": [
                1
            ],
            "settingsCustomTabFrontComponentId": [
                559
            ],
            "settingsMenuItems": [
                515
            ],
            "universalIdentifier": [
                4
            ],
            "version": [
                4
            ],
            "yarnLockChecksum": [
                4
            ],
            "yarnLockFileId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationAuthorization": {
            "applicationId": [
                559
            ],
            "applicationName": [
                4
            ],
            "applicationUniversalIdentifier": [
                4
            ],
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "lastAuthorizedAt": [
                223
            ],
            "lastUsedAt": [
                223
            ],
            "marketplaceAppUniversalIdentifier": [
                4
            ],
            "scopes": [
                4
            ],
            "userId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationCapabilityGrant": {
            "grantedCapabilities": [
                4
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectedAccountDTO": {
            "applicationId": [
                559
            ],
            "archivedAt": [
                223
            ],
            "authFailedAt": [
                223
            ],
            "authFailedReason": [
                4
            ],
            "connectionParameters": [
                448
            ],
            "connectionProviderId": [
                559
            ],
            "createdAt": [
                223
            ],
            "handle": [
                4
            ],
            "handleAliases": [
                4
            ],
            "id": [
                559
            ],
            "isOwnedByCurrentUser": [
                1
            ],
            "lastCredentialsRefreshedAt": [
                223
            ],
            "lastSignedInAt": [
                223
            ],
            "name": [
                4
            ],
            "provider": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "updatedAt": [
                223
            ],
            "userWorkspaceId": [
                559
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectionProvider": {
            "applicationId": [
                4
            ],
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oauth": [
                59
            ],
            "scope": [
                175
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationConnectionProviderOAuthConfig": {
            "isClientCredentialsConfigured": [
                1
            ],
            "scopes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationContent": {
            "agents": [
                61
            ],
            "commandMenuItems": [
                61
            ],
            "connectionProviders": [
                61
            ],
            "fields": [
                61
            ],
            "frontComponents": [
                61
            ],
            "indexes": [
                61
            ],
            "logicFunctions": [
                61
            ],
            "navigationMenuItems": [
                61
            ],
            "objects": [
                61
            ],
            "pageLayoutTabs": [
                61
            ],
            "pageLayouts": [
                61
            ],
            "permissionFlags": [
                61
            ],
            "publicAssets": [
                61
            ],
            "roles": [
                61
            ],
            "skills": [
                61
            ],
            "translations": [
                61
            ],
            "viewFields": [
                61
            ],
            "views": [
                61
            ],
            "workflows": [
                61
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationContentItem": {
            "color": [
                4
            ],
            "count": [
                2
            ],
            "description": [
                4
            ],
            "fieldUniversalIdentifier": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                4
            ],
            "label": [
                4
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "parentLabel": [
                4
            ],
            "parentUniversalIdentifier": [
                4
            ],
            "position": [
                8
            ],
            "tag": [
                4
            ],
            "timeoutSeconds": [
                2
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExport": {
            "application": [
                63
            ],
            "coverage": [
                64
            ],
            "files": [
                66
            ],
            "manifest": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportApplication": {
            "displayName": [
                4
            ],
            "sourceType": [
                83
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                4
            ],
            "reason": [
                4
            ],
            "status": [
                65
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "content": [
                4
            ],
            "folder": [
                4
            ],
            "path": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                559
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadError": {
            "fileFolder": [
                292
            ],
            "filePath": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                292
            ],
            "filePath": [
                4
            ],
            "size": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationFileUploadTarget": {
            "contentType": [
                4
            ],
            "expiresAt": [
                223
            ],
            "fileFolder": [
                292
            ],
            "fileId": [
                559
            ],
            "filePath": [
                4
            ],
            "uploadUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthCheckAction": {
            "label": [
                4
            ],
            "location": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthCheckResult": {
            "action": [
                71
            ],
            "description": [
                4
            ],
            "status": [
                73
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationHealthStatus": {},
        "ApplicationMonitoring": {
            "activity": [
                75
            ],
            "bucketSizeInSeconds": [
                2
            ],
            "creditUsage": [
                76
            ],
            "creditsUsed": [
                8
            ],
            "failedRunCount": [
                2
            ],
            "functions": [
                77
            ],
            "issues": [
                78
            ],
            "lifecycle": [
                79
            ],
            "lifecycleFailureCount": [
                2
            ],
            "lookbackInHours": [
                2
            ],
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "rateLimitEventCount": [
                2
            ],
            "runCount": [
                2
            ],
            "versions": [
                80
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringActivityBucket": {
            "bucketStart": [
                223
            ],
            "errorCount": [
                2
            ],
            "rateLimitedJobCount": [
                2
            ],
            "rateLimitedRequestCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringCreditBucket": {
            "bucketStart": [
                223
            ],
            "creditsUsed": [
                8
            ],
            "operationLabel": [
                4
            ],
            "operationType": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringFunction": {
            "failedRunCount": [
                2
            ],
            "logicFunctionName": [
                4
            ],
            "p95DurationMs": [
                8
            ],
            "runCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringIssue": {
            "affectedInstallCount": [
                2
            ],
            "errorCode": [
                4
            ],
            "eventCount": [
                2
            ],
            "lastSeenAt": [
                223
            ],
            "level": [
                4
            ],
            "logicFunctionName": [
                4
            ],
            "source": [
                4
            ],
            "versions": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringLifecycleBucket": {
            "bucketStart": [
                223
            ],
            "failedCount": [
                2
            ],
            "installCount": [
                2
            ],
            "uninstallCount": [
                2
            ],
            "upgradeCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationMonitoringVersion": {
            "activeInstallCount": [
                2
            ],
            "failedRunCount": [
                2
            ],
            "runCount": [
                2
            ],
            "version": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationPreferences": {
            "applicationId": [
                559
            ],
            "connectionProviders": [
                58
            ],
            "hasUserHealthCheck": [
                1
            ],
            "settingsMenuItems": [
                515
            ],
            "variables": [
                660
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistration": {
            "createdAt": [
                223
            ],
            "galleryImagesUrls": [
                4
            ],
            "id": [
                559
            ],
            "isConfigured": [
                1
            ],
            "isListed": [
                1
            ],
            "isPreInstalled": [
                1
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oAuthClientId": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "ownerWorkspaceId": [
                559
            ],
            "sourcePackage": [
                4
            ],
            "sourceType": [
                83
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                2
            ],
            "autoUpdateEnabled": [
                2
            ],
            "creditsUsedBreakdown": [
                220
            ],
            "mostInstalledVersion": [
                4
            ],
            "suspendedInstalls": [
                2
            ],
            "totalCreditsUsed": [
                8
            ],
            "versionDistribution": [
                670
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationSummary": {
            "id": [
                559
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "sourceType": [
                83
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationRegistrationVariable": {
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "id": [
                559
            ],
            "isDeprecated": [
                1
            ],
            "isFilled": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "options": [
                339
            ],
            "type": [
                4
            ],
            "updatedAt": [
                223
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                94
            ],
            "applicationRefreshToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationVariable": {
            "description": [
                4
            ],
            "id": [
                559
            ],
            "isDeprecated": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "options": [
                339
            ],
            "scope": [
                89
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ApplicationVariableScope": {},
        "ApprovedAccessDomain": {
            "createdAt": [
                223
            ],
            "domain": [
                4
            ],
            "id": [
                559
            ],
            "isValidated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ArchiveInboxThreadInput": {
            "threadId": [
                559
            ],
            "workspaceMemberIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "AuthBypassProviders": {
            "google": [
                1
            ],
            "microsoft": [
                1
            ],
            "password": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "AuthProviders": {
            "google": [
                1
            ],
            "magicLink": [
                1
            ],
            "microsoft": [
                1
            ],
            "password": [
                1
            ],
            "sso": [
                492
            ],
            "__typename": [
                4
            ]
        },
        "AuthToken": {
            "expiresAt": [
                223
            ],
            "token": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                94
            ],
            "refreshToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "AuthTokens": {
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AutocompleteResult": {
            "placeId": [
                4
            ],
            "text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspace": {
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "inviteHash": [
                4
            ],
            "loginToken": [
                4
            ],
            "logo": [
                4
            ],
            "personalInviteToken": [
                4
            ],
            "sso": [
                491
            ],
            "workspaceUrls": [
                713
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                99
            ],
            "availableWorkspacesForSignUp": [
                99
            ],
            "__typename": [
                4
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "availableWorkspaces": [
                100
            ],
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "AxisNameDisplay": {},
        "BarChartConfiguration": {
            "aggregateFieldMetadataId": [
                559
            ],
            "aggregateOperation": [
                28
            ],
            "axisNameDisplay": [
                102
            ],
            "color": [
                4
            ],
            "configurationType": [
                689
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                339
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "groupMode": [
                106
            ],
            "isCumulative": [
                1
            ],
            "layout": [
                107
            ],
            "numberFormat": [
                153
            ],
            "omitNullValues": [
                1
            ],
            "primaryAxisDateGranularity": [
                415
            ],
            "primaryAxisGroupByFieldMetadataId": [
                559
            ],
            "primaryAxisGroupBySubFieldName": [
                4
            ],
            "primaryAxisManualSortOrder": [
                4
            ],
            "primaryAxisOrderBy": [
                317
            ],
            "rangeMax": [
                8
            ],
            "rangeMin": [
                8
            ],
            "secondaryAxisGroupByDateGranularity": [
                415
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                559
            ],
            "secondaryAxisGroupBySubFieldName": [
                4
            ],
            "secondaryAxisManualSortOrder": [
                4
            ],
            "secondaryAxisOrderBy": [
                317
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BarChartData": {
            "data": [
                339
            ],
            "formattedToRawLookup": [
                339
            ],
            "groupMode": [
                106
            ],
            "hasTooManyGroups": [
                1
            ],
            "indexBy": [
                4
            ],
            "keys": [
                4
            ],
            "layout": [
                107
            ],
            "series": [
                108
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "xAxisLabel": [
                4
            ],
            "yAxisLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BarChartDataInput": {
            "configuration": [
                339
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "BarChartSeries": {
            "key": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BigInt": {},
        "Billing": {
            "billingUrl": [
                4
            ],
            "isBillingEnabled": [
                1
            ],
            "stripePublishableKey": [
                4
            ],
            "trialPeriods": [
                135
            ],
            "__typename": [
                4
            ]
        },
        "BillingCustomer": {
            "hasPaymentMethod": [
                1
            ],
            "id": [
                559
            ],
            "userCreditsFallback": [
                661
            ],
            "__typename": [
                4
            ]
        },
        "BillingEndTrialPeriod": {
            "billingPortalUrl": [
                4
            ],
            "billingSubscriptions": [
                130
            ],
            "currentBillingSubscription": [
                130
            ],
            "hasPaymentMethod": [
                1
            ],
            "status": [
                530
            ],
            "__typename": [
                4
            ]
        },
        "BillingEntitlement": {
            "key": [
                114
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "BillingEntitlementKey": {},
        "BillingLicensedProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "prices": [
                121
            ],
            "__typename": [
                4
            ]
        },
        "BillingMeteredProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "prices": [
                122
            ],
            "__typename": [
                4
            ]
        },
        "BillingPartnerCode": {
            "isEditable": [
                1
            ],
            "partnerCode": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingPaymentIntent": {
            "clientSecret": [
                4
            ],
            "paymentIntentType": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingPlan": {
            "baseProducts": [
                115
            ],
            "downgradePlanKeys": [
                120
            ],
            "isCheckoutDefault": [
                1
            ],
            "isSellable": [
                1
            ],
            "meteredProducts": [
                116
            ],
            "planKey": [
                120
            ],
            "resourceCreditProducts": [
                115
            ],
            "upgradePlanKeys": [
                120
            ],
            "__typename": [
                4
            ]
        },
        "BillingPlanKey": {},
        "BillingPriceLicensed": {
            "creditAmount": [
                8
            ],
            "isSellable": [
                1
            ],
            "priceUsageType": [
                137
            ],
            "recurringInterval": [
                529
            ],
            "stripePriceId": [
                4
            ],
            "unitAmount": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingPriceMetered": {
            "priceUsageType": [
                137
            ],
            "recurringInterval": [
                529
            ],
            "stripePriceId": [
                4
            ],
            "tiers": [
                123
            ],
            "__typename": [
                4
            ]
        },
        "BillingPriceTier": {
            "flatAmount": [
                8
            ],
            "unitAmount": [
                8
            ],
            "upTo": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingProduct": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingProductDTO": {
            "description": [
                4
            ],
            "images": [
                4
            ],
            "metadata": [
                127
            ],
            "name": [
                4
            ],
            "on_BillingLicensedProduct": [
                115
            ],
            "on_BillingMeteredProduct": [
                116
            ],
            "__typename": [
                4
            ]
        },
        "BillingProductKey": {},
        "BillingProductMetadata": {
            "isLegacy": [
                4
            ],
            "planKey": [
                120
            ],
            "priceUsageBased": [
                137
            ],
            "productKey": [
                126
            ],
            "__typename": [
                4
            ]
        },
        "BillingResourceCreditUsage": {
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "productKey": [
                126
            ],
            "unitPriceCents": [
                8
            ],
            "userCreditsUsed": [
                8
            ],
            "workspaceCreditsExtraGranted": [
                8
            ],
            "workspaceCreditsGranted": [
                8
            ],
            "workspaceCreditsGrantedForSeats": [
                8
            ],
            "workspaceCreditsSeats": [
                2
            ],
            "workspaceCreditsTotalGranted": [
                8
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSession": {
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscription": {
            "billingSubscriptionItems": [
                132
            ],
            "cancelAt": [
                223
            ],
            "collectionMethod": [
                131
            ],
            "currentPeriodEnd": [
                223
            ],
            "hasUserCredits": [
                1
            ],
            "id": [
                559
            ],
            "interval": [
                529
            ],
            "metadata": [
                339
            ],
            "phases": [
                133
            ],
            "status": [
                530
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionCollectionMethod": {},
        "BillingSubscriptionItem": {
            "billingProduct": [
                125
            ],
            "creditAmount": [
                8
            ],
            "hasReachedCurrentPeriodCap": [
                1
            ],
            "id": [
                559
            ],
            "quantity": [
                8
            ],
            "stripePriceId": [
                4
            ],
            "unitAmount": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionSchedulePhase": {
            "end_date": [
                8
            ],
            "items": [
                134
            ],
            "start_date": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingSubscriptionSchedulePhaseItem": {
            "price": [
                4
            ],
            "quantity": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "BillingTrialPeriod": {
            "duration": [
                8
            ],
            "isCreditCardRequired": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "BillingUpdate": {
            "billingSubscriptions": [
                130
            ],
            "currentBillingSubscription": [
                130
            ],
            "__typename": [
                4
            ]
        },
        "BillingUsageType": {},
        "BooleanFieldComparison": {
            "is": [
                1
            ],
            "isNot": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CalendarChannel": {
            "connectedAccountId": [
                559
            ],
            "contactAutoCreationPolicy": [
                140
            ],
            "createdAt": [
                223
            ],
            "excludePrivateEvents": [
                1
            ],
            "handle": [
                4
            ],
            "id": [
                559
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "syncStage": [
                141
            ],
            "syncStageStartedAt": [
                223
            ],
            "syncStatus": [
                142
            ],
            "syncedAt": [
                223
            ],
            "throttleFailureCount": [
                8
            ],
            "updatedAt": [
                223
            ],
            "visibility": [
                143
            ],
            "__typename": [
                4
            ]
        },
        "CalendarChannelContactAutoCreationPolicy": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelSyncStatus": {},
        "CalendarChannelVisibility": {},
        "CalendarConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "duplicateEmails": [
                2
            ],
            "globallyUnsubscribed": [
                2
            ],
            "hardSuppressed": [
                2
            ],
            "sendable": [
                2
            ],
            "topicUnsubscribed": [
                2
            ],
            "totalMembers": [
                2
            ],
            "trackingRefused": [
                2
            ],
            "withoutEmail": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                4
            ],
            "canceledMessageCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "Captcha": {
            "provider": [
                151
            ],
            "siteKey": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CaptchaDriverType": {},
        "ChannelSyncSuccess": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ChartNumberFormat": {},
        "ChatConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                339
            ],
            "error": [
                156
            ],
            "maxSeq": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ChatStreamError": {
            "code": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ChatThreadsConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "CheckUserExist": {
            "availableWorkspacesCount": [
                8
            ],
            "exists": [
                1
            ],
            "isEmailVerified": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ClaimableApplicationRegistration": {
            "author": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                4
            ],
            "isOwned": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiEvaluationModelConfig": {
            "description": [
                4
            ],
            "inputCostPerMillionTokens": [
                8
            ],
            "isAvailable": [
                1
            ],
            "isDeprecated": [
                1
            ],
            "label": [
                4
            ],
            "maxCriteriaPerQuestion": [
                8
            ],
            "maxScoreLevels": [
                8
            ],
            "medianLatencyMs": [
                8
            ],
            "modelId": [
                4
            ],
            "outputCostPerMillionTokens": [
                8
            ],
            "providerLabel": [
                4
            ],
            "supportedQuestionTypes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiModelConfig": {
            "contextWindowTokens": [
                8
            ],
            "costPerTask": [
                8
            ],
            "dataResidency": [
                4
            ],
            "effort": [
                4
            ],
            "efforts": [
                4
            ],
            "inputCostPerMillionTokens": [
                8
            ],
            "intelligenceIndex": [
                8
            ],
            "isBenchmarkInherited": [
                1
            ],
            "isDeprecated": [
                1
            ],
            "label": [
                4
            ],
            "maxOutputTokens": [
                8
            ],
            "modelFamily": [
                395
            ],
            "modelFamilyLabel": [
                4
            ],
            "modelId": [
                4
            ],
            "nativeCapabilities": [
                397
            ],
            "outputCostPerMillionTokens": [
                8
            ],
            "outputTokensPerSecond": [
                8
            ],
            "providerLabel": [
                4
            ],
            "providerName": [
                4
            ],
            "sdkPackage": [
                4
            ],
            "zeroDataRetention": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ClientAiModelTierConfig": {
            "isZeroDataRetentionRequired": [
                1
            ],
            "modelId": [
                4
            ],
            "requiredDataResidencyRegion": [
                4
            ],
            "tier": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "ClientConfig": {
            "aiEvaluationModels": [
                160
            ],
            "aiModelTiers": [
                162
            ],
            "aiModels": [
                161
            ],
            "allowRequestsToTwentyIcons": [
                1
            ],
            "analyticsEnabled": [
                1
            ],
            "api": [
                43
            ],
            "appVersion": [
                4
            ],
            "authProviders": [
                93
            ],
            "billing": [
                110
            ],
            "calendarBookingPageId": [
                4
            ],
            "canManageFeatureFlags": [
                1
            ],
            "captcha": [
                150
            ],
            "defaultSubdomain": [
                4
            ],
            "enterpriseInstanceType": [
                4
            ],
            "frontDomain": [
                4
            ],
            "isAttachmentPreviewEnabled": [
                1
            ],
            "isBookCallOnboardingStepEnabled": [
                1
            ],
            "isClickHouseConfigured": [
                1
            ],
            "isCloudflareIntegrationEnabled": [
                1
            ],
            "isCompanyEnrichmentEnabled": [
                1
            ],
            "isConfigVariablesInDbEnabled": [
                1
            ],
            "isCookieSessionEnabled": [
                1
            ],
            "isEmailVerificationRequired": [
                1
            ],
            "isEmailingDomainInDemoMode": [
                1
            ],
            "isGoogleCalendarEnabled": [
                1
            ],
            "isGoogleMessagingEnabled": [
                1
            ],
            "isImapSmtpCaldavEnabled": [
                1
            ],
            "isMicrosoftCalendarEnabled": [
                1
            ],
            "isMicrosoftMessagingEnabled": [
                1
            ],
            "isMultiWorkspaceEnabled": [
                1
            ],
            "isOnboardingAiChatEnabled": [
                1
            ],
            "isWorkspaceSchemaDDLLocked": [
                1
            ],
            "maintenance": [
                164
            ],
            "publicFeatureFlags": [
                446
            ],
            "publicFunctionDomain": [
                4
            ],
            "sentry": [
                511
            ],
            "serverUrl": [
                4
            ],
            "signInPrefilled": [
                1
            ],
            "support": [
                531
            ],
            "__typename": [
                4
            ]
        },
        "ClientConfigMaintenanceMode": {
            "endAt": [
                223
            ],
            "link": [
                4
            ],
            "startAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "CollectionHash": {
            "collectionName": [
                40
            ],
            "hash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CommandMenuItem": {
            "applicationId": [
                559
            ],
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                559
            ],
            "availabilityType": [
                167
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalPinnedExpression": [
                4
            ],
            "coreWorkflowVersionId": [
                559
            ],
            "createdAt": [
                223
            ],
            "engineComponentKey": [
                257
            ],
            "frontComponent": [
                299
            ],
            "frontComponentId": [
                559
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "navigationTargetObjectMetadataId": [
                559
            ],
            "pageLayoutId": [
                559
            ],
            "payload": [
                168
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "workflowVersionId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_ObjectMetadataCommandMenuItemPayload": [
                407
            ],
            "on_PathCommandMenuItemPayload": [
                432
            ],
            "__typename": [
                4
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "errors": [
                67
            ],
            "files": [
                290
            ],
            "__typename": [
                4
            ]
        },
        "ConnectedAccountPublicDTO": {
            "applicationId": [
                559
            ],
            "archivedAt": [
                223
            ],
            "authFailedAt": [
                223
            ],
            "authFailedReason": [
                4
            ],
            "connectionParameters": [
                448
            ],
            "connectionProviderId": [
                559
            ],
            "createdAt": [
                223
            ],
            "handle": [
                4
            ],
            "handleAliases": [
                4
            ],
            "id": [
                559
            ],
            "lastCredentialsRefreshedAt": [
                223
            ],
            "lastSignedInAt": [
                223
            ],
            "name": [
                4
            ],
            "provider": [
                4
            ],
            "scope": [
                171
            ],
            "scopes": [
                4
            ],
            "updatedAt": [
                223
            ],
            "userWorkspaceId": [
                559
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ConnectedAccountScope": {},
        "ConnectedImapSmtpCaldavAccount": {
            "connectionParameters": [
                324
            ],
            "handle": [
                4
            ],
            "id": [
                559
            ],
            "provider": [
                4
            ],
            "userWorkspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ConnectionCursor": {},
        "ConnectionParametersInput": {
            "connectionSecurity": [
                250
            ],
            "host": [
                4
            ],
            "password": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ConnectionProviderScope": {},
        "CreateAgentChatChannelInput": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "name": [
                4
            ],
            "roleIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateAgentInput": {
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                339
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                339
            ],
            "roleId": [
                559
            ],
            "triggers": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "CreateApiKeyInput": {
            "expiresAt": [
                4
            ],
            "name": [
                4
            ],
            "revokedAt": [
                4
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateAppMessageChannelInput": {
            "connectedAccountId": [
                559
            ],
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "messagingProviderUniversalIdentifier": [
                559
            ],
            "participantHandleFieldUniversalIdentifier": [
                559
            ],
            "visibility": [
                377
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "errors": [
                68
            ],
            "targets": [
                70
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                82
            ],
            "clientSecret": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                4
            ],
            "email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateCalendarEventInput": {
            "addConferencing": [
                1
            ],
            "attendees": [
                4
            ],
            "connectedAccountId": [
                4
            ],
            "description": [
                4
            ],
            "endsAt": [
                4
            ],
            "isFullDay": [
                1
            ],
            "location": [
                4
            ],
            "sendInvitations": [
                1
            ],
            "startsAt": [
                4
            ],
            "timeZone": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateCalendarEventOutput": {
            "calendarEventId": [
                4
            ],
            "conferenceLink": [
                4
            ],
            "error": [
                4
            ],
            "iCalUid": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CreateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                559
            ],
            "availabilityType": [
                167
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalPinnedExpression": [
                4
            ],
            "coreWorkflowVersionId": [
                559
            ],
            "engineComponentKey": [
                257
            ],
            "frontComponentId": [
                559
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "navigationTargetObjectMetadataId": [
                559
            ],
            "pageLayoutId": [
                559
            ],
            "payload": [
                339
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "workflowVersionId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailGroupChannelInput": {
            "displayName": [
                4
            ],
            "handle": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailGroupChannelOutput": {
            "forwardingAddress": [
                4
            ],
            "messageChannel": [
                371
            ],
            "__typename": [
                4
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateFieldInput": {
            "defaultValue": [
                339
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isRemoteCreation": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphRelationsCreationPayload": [
                339
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "options": [
                339
            ],
            "relationCreationPayload": [
                339
            ],
            "settings": [
                339
            ],
            "type": [
                285
            ],
            "__typename": [
                4
            ]
        },
        "CreateFrontComponentInput": {
            "builtComponentChecksum": [
                4
            ],
            "builtComponentPath": [
                4
            ],
            "componentName": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "sourceComponentPath": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateIndexInput": {
            "fields": [
                192
            ],
            "indexType": [
                332
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "cronTriggerSettings": [
                339
            ],
            "databaseEventTriggerSettings": [
                339
            ],
            "description": [
                4
            ],
            "httpRouteTriggerSettings": [
                339
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "serverRouteTriggerSettings": [
                339
            ],
            "source": [
                339
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                339
            ],
            "universalIdentifier": [
                559
            ],
            "workflowActionTriggerSettings": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "CreateMcpServerInput": {
            "connectionProviderId": [
                559
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                4
            ],
            "unsubscribeTopicId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateNavigationMenuItemInput": {
            "agentChatChannelId": [
                559
            ],
            "agentId": [
                559
            ],
            "color": [
                4
            ],
            "folderId": [
                559
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "nativePageKey": [
                4
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "targetObjectMetadataId": [
                559
            ],
            "targetRecordId": [
                559
            ],
            "type": [
                399
            ],
            "userWorkspaceId": [
                559
            ],
            "viewId": [
                559
            ],
            "workflowId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateObjectInput": {
            "color": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isRemote": [
                1
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "primaryKeyColumnType": [
                4
            ],
            "primaryKeyFieldMetadataSettings": [
                339
            ],
            "shortcut": [
                4
            ],
            "skipNameField": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                190
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                193
            ],
            "__typename": [
                4
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                198
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "type": [
                425
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutTabInput": {
            "layoutMode": [
                424
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "configuration": [
                339
            ],
            "objectMetadataId": [
                559
            ],
            "pageLayoutTabId": [
                559
            ],
            "position": [
                339
            ],
            "title": [
                4
            ],
            "type": [
                690
            ],
            "__typename": [
                4
            ]
        },
        "CreateRecordExportInput": {
            "fieldMetadataIds": [
                559
            ],
            "filter": [
                339
            ],
            "objectMetadataId": [
                559
            ],
            "orderBy": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "CreateRelatedRecordPathInput": {
            "firstFieldMetadataId": [
                559
            ],
            "isInherent": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "secondFieldMetadataId": [
                559
            ],
            "thirdFieldMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateRoleInput": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateSkillInput": {
            "content": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "description": [
                4
            ],
            "name": [
                4
            ],
            "visibility": [
                563
            ],
            "__typename": [
                4
            ]
        },
        "CreateUsageLimitInput": {
            "burstValue": [
                109
            ],
            "limitKind": [
                4
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                648
            ],
            "periodCount": [
                2
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                655
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                657
            ],
            "__typename": [
                4
            ]
        },
        "CreateValidationRuleInput": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                559
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                559
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFieldInput": {
            "aggregateOperation": [
                28
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldGroupId": [
                559
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                559
            ],
            "logicalOperator": [
                678
            ],
            "parentViewFilterGroupId": [
                559
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewFilterInput": {
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "operand": [
                679
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "value": [
                339
            ],
            "viewFilterGroupId": [
                559
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewGroupInput": {
            "fieldValue": [
                4
            ],
            "id": [
                559
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewInput": {
            "anyFieldFilterValue": [
                4
            ],
            "calendarEndFieldMetadataId": [
                559
            ],
            "calendarFieldMetadataId": [
                559
            ],
            "calendarLayout": [
                672
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isCompact": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                559
            ],
            "kanbanColumnWidth": [
                2
            ],
            "key": [
                681
            ],
            "mainGroupByFieldMetadataId": [
                559
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "openRecordIn": [
                682
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                685
            ],
            "visibility": [
                686
            ],
            "__typename": [
                4
            ]
        },
        "CreateViewSortInput": {
            "direction": [
                684
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "subFieldName": [
                4
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "CreateWebhookInput": {
            "description": [
                4
            ],
            "id": [
                559
            ],
            "operations": [
                4
            ],
            "roleId": [
                559
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "CreditUsedItem": {
            "creditsUsed": [
                8
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "operation": [
                648
            ],
            "resource": [
                655
            ],
            "__typename": [
                4
            ]
        },
        "CursorPaging": {
            "after": [
                173
            ],
            "before": [
                173
            ],
            "first": [
                2
            ],
            "last": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "DatabaseEventAction": {},
        "DateTime": {},
        "DeleteApprovedAccessDomainInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DeletedWorkspaceMember": {
            "avatarUrl": [
                4
            ],
            "id": [
                559
            ],
            "name": [
                302
            ],
            "userEmail": [
                4
            ],
            "userWorkspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "DevelopmentApplication": {
            "id": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DomainRecord": {
            "key": [
                4
            ],
            "status": [
                4
            ],
            "type": [
                4
            ],
            "validationType": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DomainValidRecords": {
            "domain": [
                4
            ],
            "id": [
                559
            ],
            "isCustomDomainEnabled": [
                1
            ],
            "records": [
                243
            ],
            "__typename": [
                4
            ]
        },
        "DuplicatedDashboard": {
            "createdAt": [
                4
            ],
            "id": [
                559
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "updatedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "DuplicatedMessageList": {
            "createdAt": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                559
            ],
            "memberCount": [
                8
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "updatedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EditSso": {
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                493
            ],
            "type": [
                319
            ],
            "__typename": [
                4
            ]
        },
        "EditSsoInput": {
            "id": [
                559
            ],
            "status": [
                493
            ],
            "__typename": [
                4
            ]
        },
        "EmailAccountConnectionParameters": {
            "CALDAV": [
                174
            ],
            "IMAP": [
                174
            ],
            "SMTP": [
                174
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EmailConnectionSecurity": {},
        "EmailPasswordResetLink": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "EmailingDomain": {
            "createdAt": [
                223
            ],
            "domain": [
                4
            ],
            "id": [
                559
            ],
            "status": [
                254
            ],
            "tenantStatus": [
                255
            ],
            "unsubscribeHostnameStatus": [
                561
            ],
            "updatedAt": [
                223
            ],
            "verificationRecords": [
                667
            ],
            "verifiedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "EmailsConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "EngineComponentKey": {},
        "EnqueueJobInput": {
            "delayMs": [
                2
            ],
            "jobId": [
                4
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "payload": [
                339
            ],
            "retryLimit": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobItemInput": {
            "jobId": [
                4
            ],
            "payload": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                1
            ],
            "jobId": [
                4
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobsInput": {
            "delayMs": [
                2
            ],
            "jobs": [
                259
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "payloads": [
                339
            ],
            "retryLimit": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnqueueJobsResult": {
            "availableBytes": [
                8
            ],
            "enqueued": [
                1
            ],
            "enqueuedJobsCount": [
                2
            ],
            "jobIds": [
                4
            ],
            "jobs": [
                263
            ],
            "logicFunctionUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnqueuedJob": {
            "jobId": [
                4
            ],
            "sizeBytes": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EnterpriseLicenseInfoDTO": {
            "expiresAt": [
                223
            ],
            "isValid": [
                1
            ],
            "licensee": [
                4
            ],
            "subscriptionId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "cancelAt": [
                223
            ],
            "currentPeriodEnd": [
                223
            ],
            "expiresAt": [
                223
            ],
            "isCancellationScheduled": [
                1
            ],
            "licensee": [
                4
            ],
            "status": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogDateRangeInput": {
            "end": [
                223
            ],
            "start": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "EventLogFieldFilterInput": {
            "field": [
                4
            ],
            "operand": [
                268
            ],
            "values": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogFilterOperand": {},
        "EventLogFiltersInput": {
            "dateRange": [
                266
            ],
            "eventType": [
                4
            ],
            "fieldFilters": [
                267
            ],
            "objectMetadataId": [
                4
            ],
            "recordId": [
                4
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                4
            ],
            "hasNextPage": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "EventLogQueryInput": {
            "after": [
                4
            ],
            "filters": [
                269
            ],
            "first": [
                2
            ],
            "table": [
                274
            ],
            "__typename": [
                4
            ]
        },
        "EventLogQueryResult": {
            "pageInfo": [
                270
            ],
            "records": [
                273
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "EventLogRecord": {
            "event": [
                4
            ],
            "isCustom": [
                1
            ],
            "objectMetadataId": [
                4
            ],
            "properties": [
                339
            ],
            "recordId": [
                4
            ],
            "timestamp": [
                223
            ],
            "userId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "EventLogTable": {},
        "EventSubscription": {
            "eventStreamId": [
                4
            ],
            "metadataEvents": [
                386
            ],
            "objectRecordEventsWithQueryIds": [
                414
            ],
            "queueJobEvents": [
                342
            ],
            "__typename": [
                4
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                559
            ],
            "payload": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "FeatureFlag": {
            "key": [
                278
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "FeatureFlagKey": {},
        "Field": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "defaultValue": [
                339
            ],
            "description": [
                4
            ],
            "disabledFieldPermissionActions": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphId": [
                559
            ],
            "morphRelations": [
                467
            ],
            "name": [
                4
            ],
            "object": [
                401
            ],
            "objectMetadataId": [
                559
            ],
            "options": [
                339
            ],
            "relation": [
                467
            ],
            "settings": [
                339
            ],
            "type": [
                285
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                689
            ],
            "fieldDisplayMode": [
                282
            ],
            "fieldMetadataId": [
                4
            ],
            "isUIEditable": [
                1
            ],
            "nestedRelationFieldMetadataId": [
                4
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FieldConnection": {
            "edges": [
                283
            ],
            "pageInfo": [
                421
            ],
            "__typename": [
                4
            ]
        },
        "FieldDisplayMode": {},
        "FieldEdge": {
            "cursor": [
                173
            ],
            "node": [
                279
            ],
            "__typename": [
                4
            ]
        },
        "FieldFilter": {
            "and": [
                284
            ],
            "id": [
                560
            ],
            "isActive": [
                138
            ],
            "isSystem": [
                138
            ],
            "isUIEditable": [
                138
            ],
            "isUIReadOnly": [
                138
            ],
            "objectMetadataId": [
                560
            ],
            "or": [
                284
            ],
            "__typename": [
                4
            ]
        },
        "FieldMetadataType": {},
        "FieldPermission": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "objectMetadataId": [
                559
            ],
            "roleId": [
                559
            ],
            "rowLevelPermissionPredicateGroupId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "FieldPermissionInput": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldMetadataId": [
                559
            ],
            "objectMetadataId": [
                559
            ],
            "rowLevelPermissionPredicateGroupId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "FieldRichTextConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                689
            ],
            "newFieldDefaultVisibility": [
                1
            ],
            "shouldAllowUserToSeeHiddenFields": [
                1
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "File": {
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "path": [
                4
            ],
            "size": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "FileAttachmentInput": {
            "filename": [
                4
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "FileFolder": {},
        "FileUploadTarget": {
            "contentType": [
                4
            ],
            "expiresAt": [
                223
            ],
            "fileId": [
                559
            ],
            "uploadUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FileWithSignedUrl": {
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "path": [
                4
            ],
            "size": [
                8
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "FindAvailableSSOIDP": {
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                493
            ],
            "type": [
                319
            ],
            "workspace": [
                710
            ],
            "__typename": [
                4
            ]
        },
        "FindMessageSuppressionsInput": {
            "limit": [
                2
            ],
            "offset": [
                2
            ],
            "reason": [
                384
            ],
            "searchTerm": [
                4
            ],
            "unsubscribeTopicId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                689
            ],
            "fieldMetadataId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponent": {
            "applicationGrantedCapabilities": [
                4
            ],
            "applicationGrantedIframeMediaPermissions": [
                321
            ],
            "applicationId": [
                559
            ],
            "applicationName": [
                4
            ],
            "applicationTokenPair": [
                87
            ],
            "applicationVariables": [
                339
            ],
            "builtComponentChecksum": [
                4
            ],
            "builtComponentPath": [
                4
            ],
            "componentName": [
                4
            ],
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "frontComponentSharedDependenciesChecksum": [
                4
            ],
            "id": [
                559
            ],
            "isHeadless": [
                1
            ],
            "name": [
                4
            ],
            "sourceComponentPath": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "usesSdkClient": [
                1
            ],
            "widgetAvailability": [
                301
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                689
            ],
            "frontComponentId": [
                559
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "FrontComponentWidgetAvailability": {
            "objectMetadataId": [
                559
            ],
            "pageLayoutType": [
                425
            ],
            "__typename": [
                4
            ]
        },
        "FullName": {
            "firstName": [
                4
            ],
            "lastName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GenerateInput": {
            "input": [
                487
            ],
            "instructions": [
                4
            ],
            "modelId": [
                4
            ],
            "responseFormat": [
                339
            ],
            "runId": [
                559
            ],
            "scope": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "GenerateResult": {
            "error": [
                4
            ],
            "object": [
                339
            ],
            "runId": [
                559
            ],
            "success": [
                1
            ],
            "text": [
                4
            ],
            "usage": [
                37
            ],
            "__typename": [
                4
            ]
        },
        "GetApiKeyInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                4
            ],
            "id": [
                559
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                559
            ],
            "workspaceInviteHash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedProgress": {
            "completedStepActionKeys": [
                309
            ],
            "isHidden": [
                1
            ],
            "selectedStepActionKey": [
                309
            ],
            "snoozedUntil": [
                4
            ],
            "steps": [
                310
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedStepActionKey": {},
        "GettingStartedStepDefinition": {
            "actionKey": [
                309
            ],
            "description": [
                4
            ],
            "doneChatThreadId": [
                4
            ],
            "doneDescription": [
                4
            ],
            "doneTitle": [
                4
            ],
            "doneWorkflowId": [
                4
            ],
            "icon": [
                4
            ],
            "iconColor": [
                4
            ],
            "kind": [
                311
            ],
            "prompt": [
                4
            ],
            "promptLabel": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedStepKind": {},
        "GettingStartedWorkflow": {
            "versionId": [
                4
            ],
            "workflowId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreview": {
            "actions": [
                314
            ],
            "stepActionKey": [
                309
            ],
            "trigger": [
                315
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreviewAction": {
            "title": [
                4
            ],
            "type": [
                691
            ],
            "__typename": [
                4
            ]
        },
        "GettingStartedWorkflowPreviewTrigger": {
            "databaseEventAction": [
                4
            ],
            "title": [
                4
            ],
            "type": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GrantApplicationCapabilitiesInput": {
            "applicationId": [
                559
            ],
            "capabilities": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GraphOrderBy": {},
        "GridPosition": {
            "column": [
                8
            ],
            "columnSpan": [
                8
            ],
            "row": [
                8
            ],
            "rowSpan": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "IdentityProviderType": {},
        "IframeConfiguration": {
            "configurationType": [
                689
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "IframeMediaPermission": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "IframeMediaPermissionInput": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "connectedAccountId": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "CALDAV": [
                325
            ],
            "IMAP": [
                325
            ],
            "SMTP": [
                325
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "connectionSecurity": [
                250
            ],
            "host": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Impersonate": {
            "loginToken": [
                94
            ],
            "workspace": [
                714
            ],
            "__typename": [
                4
            ]
        },
        "InboxThreadRecordInput": {
            "objectNameSingular": [
                4
            ],
            "recordId": [
                559
            ],
            "threadId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Index": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "indexFieldMetadataList": [
                330
            ],
            "indexType": [
                332
            ],
            "indexWhereClause": [
                4
            ],
            "isCustom": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isUnique": [
                1
            ],
            "name": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "IndexEdge": {
            "cursor": [
                173
            ],
            "node": [
                328
            ],
            "__typename": [
                4
            ]
        },
        "IndexField": {
            "createdAt": [
                223
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "order": [
                8
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "IndexFilter": {
            "and": [
                331
            ],
            "id": [
                560
            ],
            "isCustom": [
                138
            ],
            "or": [
                331
            ],
            "__typename": [
                4
            ]
        },
        "IndexType": {},
        "IngestAppMessagesInput": {
            "messageChannelId": [
                559
            ],
            "messages": [
                52
            ],
            "__typename": [
                4
            ]
        },
        "IngestAppMessagesOutput": {
            "messages": [
                335
            ],
            "__typename": [
                4
            ]
        },
        "IngestedAppMessage": {
            "externalId": [
                4
            ],
            "hasAttachments": [
                1
            ],
            "messageId": [
                559
            ],
            "messageThreadId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "InvalidatePassword": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "InviteSuggestion": {
            "displayName": [
                4
            ],
            "email": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "JSON": {},
        "JSONObject": {},
        "JobState": {},
        "JobStatus": {
            "attemptsMade": [
                2
            ],
            "enqueuedAt": [
                8
            ],
            "failedReason": [
                4
            ],
            "finishedAt": [
                8
            ],
            "jobId": [
                4
            ],
            "progress": [
                2
            ],
            "startedAt": [
                8
            ],
            "state": [
                341
            ],
            "__typename": [
                4
            ]
        },
        "LineChartConfiguration": {
            "aggregateFieldMetadataId": [
                559
            ],
            "aggregateOperation": [
                28
            ],
            "axisNameDisplay": [
                102
            ],
            "color": [
                4
            ],
            "configurationType": [
                689
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                339
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "isCumulative": [
                1
            ],
            "isStacked": [
                1
            ],
            "numberFormat": [
                153
            ],
            "omitNullValues": [
                1
            ],
            "primaryAxisDateGranularity": [
                415
            ],
            "primaryAxisGroupByFieldMetadataId": [
                559
            ],
            "primaryAxisGroupBySubFieldName": [
                4
            ],
            "primaryAxisManualSortOrder": [
                4
            ],
            "primaryAxisOrderBy": [
                317
            ],
            "rangeMax": [
                8
            ],
            "rangeMin": [
                8
            ],
            "secondaryAxisGroupByDateGranularity": [
                415
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                559
            ],
            "secondaryAxisGroupBySubFieldName": [
                4
            ],
            "secondaryAxisManualSortOrder": [
                4
            ],
            "secondaryAxisOrderBy": [
                317
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "LineChartData": {
            "formattedToRawLookup": [
                339
            ],
            "hasTooManyGroups": [
                1
            ],
            "series": [
                347
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "xAxisLabel": [
                4
            ],
            "yAxisLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "LineChartDataInput": {
            "configuration": [
                339
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "LineChartDataPoint": {
            "x": [
                4
            ],
            "y": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "LineChartSeries": {
            "data": [
                346
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                4
            ],
            "scope": [
                171
            ],
            "userWorkspaceId": [
                4
            ],
            "visibility": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ListAppMessageChannelsInput": {
            "connectedAccountId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ListAppMessageFoldersInput": {
            "messageChannelId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Location": {
            "lat": [
                8
            ],
            "lng": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunction": {
            "applicationId": [
                559
            ],
            "canRunOnDemand": [
                1
            ],
            "createdAt": [
                223
            ],
            "cronTriggerSettings": [
                339
            ],
            "databaseEventTriggerSettings": [
                339
            ],
            "description": [
                4
            ],
            "executionMode": [
                353
            ],
            "handlerName": [
                4
            ],
            "httpRouteTriggerSettings": [
                339
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "runtime": [
                4
            ],
            "sourceHandlerPath": [
                4
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                339
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "workflowActionTriggerSettings": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionExecutionMode": {},
        "LogicFunctionExecutionResult": {
            "data": [
                339
            ],
            "duration": [
                8
            ],
            "error": [
                339
            ],
            "logs": [
                4
            ],
            "status": [
                355
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "LogicFunctionIdInput": {
            "id": [
                19
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                4
            ],
            "name": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                559
            ],
            "applicationUniversalIdentifier": [
                559
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "LoginToken": {
            "loginToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceApp": {
            "author": [
                4
            ],
            "category": [
                4
            ],
            "connectUrl": [
                4
            ],
            "description": [
                4
            ],
            "id": [
                4
            ],
            "isListed": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppDetail": {
            "aboutDescription": [
                4
            ],
            "author": [
                4
            ],
            "billsCredits": [
                1
            ],
            "category": [
                4
            ],
            "connectUrl": [
                4
            ],
            "content": [
                60
            ],
            "defaultRoleUniversalIdentifier": [
                4
            ],
            "description": [
                4
            ],
            "emailSupport": [
                4
            ],
            "galleryImages": [
                4
            ],
            "id": [
                4
            ],
            "installCount": [
                2
            ],
            "isListed": [
                1
            ],
            "issueReportUrl": [
                4
            ],
            "latestAvailableVersion": [
                4
            ],
            "logoUrl": [
                4
            ],
            "manifest": [
                339
            ],
            "name": [
                4
            ],
            "objects": [
                362
            ],
            "pricingDescription": [
                4
            ],
            "requestedCapabilities": [
                4
            ],
            "requestedIframeMediaPermissions": [
                321
            ],
            "roles": [
                363
            ],
            "screenshots": [
                4
            ],
            "sourcePackage": [
                4
            ],
            "sourceType": [
                83
            ],
            "termsUrl": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "websiteUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppObject": {
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRole": {
            "canAccessAllTools": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "fieldPermissions": [
                364
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "objectPermissions": [
                365
            ],
            "permissionFlagUniversalIdentifiers": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "canReadFieldValue": [
                1
            ],
            "canUpdateFieldValue": [
                1
            ],
            "fieldUniversalIdentifier": [
                4
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectUniversalIdentifier": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "McpServer": {
            "applicationId": [
                559
            ],
            "connectionProviderId": [
                559
            ],
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "tools": [
                367
            ],
            "toolsSyncError": [
                4
            ],
            "toolsSyncedAt": [
                223
            ],
            "updatedAt": [
                223
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "McpServerTool": {
            "annotations": [
                339
            ],
            "description": [
                4
            ],
            "inputSchema": [
                339
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "MessageCampaignSendBlockerDTO": {
            "code": [
                4
            ],
            "message": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MessageChannel": {
            "connectedAccount": [
                170
            ],
            "connectedAccountId": [
                559
            ],
            "contactAutoCreationPolicy": [
                372
            ],
            "createdAt": [
                223
            ],
            "displayName": [
                4
            ],
            "excludeGroupEmails": [
                1
            ],
            "excludeNonProfessionalEmails": [
                1
            ],
            "handle": [
                4
            ],
            "id": [
                559
            ],
            "importProgress": [
                2
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "messageFolderImportPolicy": [
                379
            ],
            "messagingProviderUniversalIdentifier": [
                559
            ],
            "participantHandleFieldUniversalIdentifier": [
                559
            ],
            "pendingGroupEmailsAction": [
                373
            ],
            "syncStage": [
                374
            ],
            "syncStageStartedAt": [
                223
            ],
            "syncStatus": [
                375
            ],
            "syncedAt": [
                223
            ],
            "throttleFailureCount": [
                8
            ],
            "throttleRetryAfter": [
                223
            ],
            "type": [
                376
            ],
            "updatedAt": [
                223
            ],
            "visibility": [
                377
            ],
            "__typename": [
                4
            ]
        },
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStage": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelType": {},
        "MessageChannelVisibility": {},
        "MessageFolder": {
            "createdAt": [
                223
            ],
            "externalId": [
                4
            ],
            "id": [
                559
            ],
            "isSentFolder": [
                1
            ],
            "isSynced": [
                1
            ],
            "messageChannelId": [
                559
            ],
            "name": [
                4
            ],
            "parentFolderId": [
                4
            ],
            "pendingSyncAction": [
                380
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "MessageFolderImportPolicy": {},
        "MessageFolderPendingSyncAction": {},
        "MessageParticipantRole": {},
        "MessageSuppression": {
            "createdAt": [
                223
            ],
            "emailAddress": [
                4
            ],
            "id": [
                559
            ],
            "reason": [
                384
            ],
            "source": [
                385
            ],
            "unsubscribeTopicId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "MessageSuppressionList": {
            "records": [
                382
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MetadataEvent": {
            "metadataName": [
                4
            ],
            "properties": [
                413
            ],
            "recordId": [
                4
            ],
            "type": [
                387
            ],
            "updatedCollectionHash": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataEventAction": {},
        "MetadataTranslation": {
            "canonicalValue": [
                4
            ],
            "locale": [
                4
            ],
            "metadataName": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "property": [
                4
            ],
            "provenance": [
                390
            ],
            "recordId": [
                559
            ],
            "sourceValue": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                4
            ],
            "property": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MetadataTranslationProvenance": {},
        "MetadataTranslationsInput": {
            "fieldMetadataId": [
                559
            ],
            "locale": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "MinimalMetadata": {
            "collectionHashes": [
                165
            ],
            "objectMetadataItems": [
                393
            ],
            "views": [
                394
            ],
            "__typename": [
                4
            ]
        },
        "MinimalObjectMetadata": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isRemote": [
                1
            ],
            "isSystem": [
                1
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "MinimalView": {
            "id": [
                559
            ],
            "key": [
                681
            ],
            "objectMetadataId": [
                559
            ],
            "type": [
                685
            ],
            "__typename": [
                4
            ]
        },
        "ModelFamily": {},
        "Mutation": {
            "activateSkill": [
                522,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                695,
                {
                    "data": [
                        3,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "addAgentChatMessageReaction": [
                24,
                {
                    "emoji": [
                        4,
                        "String!"
                    ],
                    "messageId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "addQueryToEventStream": [
                1,
                {
                    "input": [
                        5,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "approveApplicationIframeMediaPermissions": [
                54,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ],
                    "approvedIframeMediaPermissions": [
                        322,
                        "[IframeMediaPermissionInput!]!"
                    ]
                }
            ],
            "archiveInboxThread": [
                1,
                {
                    "input": [
                        91,
                        "ArchiveInboxThreadInput!"
                    ]
                }
            ],
            "assignAgentChatThread": [
                1,
                {
                    "assigneeWorkspaceMemberId": [
                        559
                    ],
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                1,
                {
                    "agentId": [
                        559,
                        "UUID!"
                    ],
                    "roleId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                1,
                {
                    "apiKeyId": [
                        559,
                        "UUID!"
                    ],
                    "roleId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "attachRecordToInboxThread": [
                1,
                {
                    "input": [
                        327,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "authorizeApp": [
                97,
                {
                    "clientId": [
                        4,
                        "String!"
                    ],
                    "codeChallenge": [
                        4
                    ],
                    "issuer": [
                        4
                    ],
                    "redirectUrl": [
                        4,
                        "String!"
                    ],
                    "resource": [
                        4
                    ],
                    "scope": [
                        4
                    ],
                    "state": [
                        4
                    ]
                }
            ],
            "cancelMessageCampaign": [
                149,
                {
                    "input": [
                        148,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "cancelSwitchBillingInterval": [
                136
            ],
            "cancelSwitchBillingPlan": [
                136
            ],
            "cancelSwitchResourceCreditPrice": [
                136
            ],
            "checkCustomDomainValidRecords": [
                244
            ],
            "checkPublicDomainValidRecords": [
                244,
                {
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkoutSession": [
                129,
                {
                    "plan": [
                        120,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        529,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        1,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        4
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                82,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeAppTarballUpload": [
                82,
                {
                    "fileId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                169,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "fileIds": [
                        559,
                        "[UUID!]!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                419,
                {
                    "hasBookedCall": [
                        1,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        1,
                        "Boolean!"
                    ]
                }
            ],
            "completeFileUpload": [
                294,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeNewWorkspaceLogoUpload": [
                294,
                {
                    "fileId": [
                        4,
                        "String!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceLogoUpload": [
                294,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceMemberProfilePictureUpload": [
                294,
                {
                    "fileId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createAgentChatChannel": [
                7,
                {
                    "input": [
                        176,
                        "CreateAgentChatChannelInput!"
                    ]
                }
            ],
            "createApiKey": [
                44,
                {
                    "input": [
                        178,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "createAppMessageChannel": [
                371,
                {
                    "input": [
                        179,
                        "CreateAppMessageChannelInput!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                180,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "files": [
                        69,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                181,
                {
                    "input": [
                        182,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                90,
                {
                    "input": [
                        183,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createBillingPaymentMethodSetupIntent": [
                118
            ],
            "createCalendarEvent": [
                185,
                {
                    "input": [
                        184,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "createChatThread": [
                18,
                {
                    "channelId": [
                        559
                    ]
                }
            ],
            "createCommandMenuItem": [
                166,
                {
                    "input": [
                        186,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                242,
                {
                    "name": [
                        4,
                        "String!"
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                188,
                {
                    "input": [
                        187,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "createEmailingDomain": [
                253,
                {
                    "input": [
                        189,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "createFileUpload": [
                293,
                {
                    "fieldMetadataId": [
                        4
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        4
                    ],
                    "fileFolder": [
                        292,
                        "FileFolder!"
                    ],
                    "filename": [
                        4,
                        "String!"
                    ],
                    "size": [
                        8,
                        "Float!"
                    ]
                }
            ],
            "createFrontComponent": [
                299,
                {
                    "input": [
                        191,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                398,
                {
                    "inputs": [
                        197,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                675,
                {
                    "inputs": [
                        212,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "createManyViewFields": [
                674,
                {
                    "inputs": [
                        213,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "createManyViewGroups": [
                680,
                {
                    "inputs": [
                        216,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "createMcpServer": [
                366,
                {
                    "input": [
                        195,
                        "CreateMcpServerInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                382,
                {
                    "input": [
                        196,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                398,
                {
                    "input": [
                        197,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "createNewWorkspaceLogoUpload": [
                293,
                {
                    "filename": [
                        4,
                        "String!"
                    ],
                    "size": [
                        8,
                        "Float!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                519,
                {
                    "input": [
                        517,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createObjectEvent": [
                41,
                {
                    "event": [
                        4,
                        "String!"
                    ],
                    "objectMetadataId": [
                        559,
                        "UUID!"
                    ],
                    "properties": [
                        339
                    ],
                    "recordId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "createOneAgent": [
                6,
                {
                    "input": [
                        177,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "createOneField": [
                279,
                {
                    "input": [
                        199,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "createOneIndex": [
                328,
                {
                    "input": [
                        200,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                352,
                {
                    "input": [
                        194,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createOneObject": [
                401,
                {
                    "input": [
                        201,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "createOneRole": [
                474,
                {
                    "createRoleInput": [
                        207,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "createPageLayout": [
                422,
                {
                    "input": [
                        202,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                423,
                {
                    "input": [
                        203,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                426,
                {
                    "input": [
                        204,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                445,
                {
                    "applicationId": [
                        4,
                        "String!"
                    ],
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "createRelatedRecordPath": [
                466,
                {
                    "input": [
                        206,
                        "CreateRelatedRecordPathInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                519,
                {
                    "input": [
                        518,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "createSkill": [
                522,
                {
                    "input": [
                        208,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "createSubscriptionPaymentIntent": [
                118,
                {
                    "idempotencyKey": [
                        4,
                        "String!"
                    ],
                    "plan": [
                        120,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        529,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        1,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        4
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                562,
                {
                    "input": [
                        209,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "createUsageLimit": [
                646,
                {
                    "input": [
                        210,
                        "CreateUsageLimitInput!"
                    ]
                }
            ],
            "createValidationRule": [
                666,
                {
                    "input": [
                        211,
                        "CreateValidationRuleInput!"
                    ]
                }
            ],
            "createView": [
                671,
                {
                    "input": [
                        217,
                        "CreateViewInput!"
                    ]
                }
            ],
            "createViewField": [
                674,
                {
                    "input": [
                        213,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                675,
                {
                    "input": [
                        212,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFilter": [
                676,
                {
                    "input": [
                        215,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                677,
                {
                    "input": [
                        214,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "createViewGroup": [
                680,
                {
                    "input": [
                        216,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createViewSort": [
                683,
                {
                    "input": [
                        218,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "createWebhook": [
                687,
                {
                    "input": [
                        219,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "deactivateSkill": [
                522,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteAgentChatChannel": [
                1,
                {
                    "channelId": [
                        559,
                        "UUID!"
                    ],
                    "destinationChannelId": [
                        559
                    ]
                }
            ],
            "deleteAppKeyValue": [
                1,
                {
                    "key": [
                        4,
                        "String!"
                    ],
                    "scope": [
                        49
                    ]
                }
            ],
            "deleteAppMessageChannel": [
                371,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                1,
                {
                    "input": [
                        224,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                166,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteConnectedAccount": [
                170,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                695
            ],
            "deleteEmailGroupChannel": [
                371,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                299,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                398,
                {
                    "ids": [
                        559,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteMcpServer": [
                366,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                1,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                398,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteOneAgent": [
                6,
                {
                    "input": [
                        21,
                        "AgentIdInput!"
                    ]
                }
            ],
            "deleteOneField": [
                279,
                {
                    "input": [
                        225,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                328,
                {
                    "input": [
                        226,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                352,
                {
                    "input": [
                        356,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                401,
                {
                    "input": [
                        227,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                4,
                {
                    "roleId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deletePublicDomain": [
                1,
                {
                    "domain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                1,
                {
                    "messageId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteRelatedRecordPath": [
                466,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                228,
                {
                    "input": [
                        229,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "deleteSkill": [
                522,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteTwoFactorAuthenticationMethod": [
                230,
                {
                    "twoFactorAuthenticationMethodId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                1,
                {
                    "usageLimitId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteUser": [
                659
            ],
            "deleteUserFromWorkspace": [
                663,
                {
                    "workspaceMemberIdToDelete": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteValidationRule": [
                666,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteView": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteViewField": [
                674,
                {
                    "input": [
                        232,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                675,
                {
                    "input": [
                        231,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                676,
                {
                    "input": [
                        233,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "deleteViewGroup": [
                680,
                {
                    "input": [
                        234,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                1,
                {
                    "input": [
                        235,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                687,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "deleteWorkspaceInvitation": [
                4,
                {
                    "appTokenId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayout": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyViewField": [
                674,
                {
                    "input": [
                        238,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                675,
                {
                    "input": [
                        237,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                676,
                {
                    "input": [
                        239,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                1,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "destroyViewGroup": [
                680,
                {
                    "input": [
                        240,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                1,
                {
                    "input": [
                        241,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "detachRecordFromInboxThread": [
                1,
                {
                    "input": [
                        327,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "disconnectConnectedAccount": [
                170,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "duplicateDashboard": [
                245,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "duplicateMessageList": [
                246,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                247,
                {
                    "input": [
                        248,
                        "EditSsoInput!"
                    ]
                }
            ],
            "emailPasswordResetLink": [
                251,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "workspaceId": [
                        559
                    ]
                }
            ],
            "endSubscriptionTrialPeriod": [
                112
            ],
            "enqueueJob": [
                260,
                {
                    "input": [
                        258,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                262,
                {
                    "input": [
                        261,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "enrichWorkspaceCompany": [
                699
            ],
            "executeOneLogicFunction": [
                354,
                {
                    "input": [
                        276,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "generate": [
                304,
                {
                    "input": [
                        303,
                        "GenerateInput!"
                    ]
                }
            ],
            "generateApiKeyToken": [
                46,
                {
                    "apiKeyId": [
                        559,
                        "UUID!"
                    ],
                    "expiresAt": [
                        4,
                        "String!"
                    ]
                }
            ],
            "generateFrontComponentApplicationTokenPair": [
                87,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                94
            ],
            "generateTransientToken": [
                540
            ],
            "generateTwoFactorAuthenticationBackupCodes": [
                554,
                {
                    "otp": [
                        4
                    ]
                }
            ],
            "generateTwoFactorAuthenticationRecoveryCode": [
                556,
                {
                    "otp": [
                        4
                    ],
                    "userId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "getAuthTokensFromLoginToken": [
                96,
                {
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                96,
                {
                    "captchaToken": [
                        4
                    ],
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "otp": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                96,
                {
                    "ssoExchangeToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromTwoFactorAuthenticationRecoveryCode": [
                557,
                {
                    "captchaToken": [
                        4
                    ],
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "recoveryCode": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                306,
                {
                    "input": [
                        307,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                359,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "origin": [
                        4,
                        "String!"
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                418
            ],
            "grantApplicationCapabilities": [
                56,
                {
                    "input": [
                        316,
                        "GrantApplicationCapabilitiesInput!"
                    ]
                }
            ],
            "impersonate": [
                326,
                {
                    "userId": [
                        559,
                        "UUID!"
                    ],
                    "workspaceId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "ingestAppMessages": [
                334,
                {
                    "input": [
                        333,
                        "IngestAppMessagesInput!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                336,
                {
                    "loginToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                336
            ],
            "installApplication": [
                54,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ],
                    "version": [
                        4
                    ]
                }
            ],
            "installMarketplaceApp": [
                1,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ],
                    "version": [
                        4
                    ]
                }
            ],
            "markAgentChatThreadAsDoneInChannel": [
                1,
                {
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "moveAgentChatThreadToChannel": [
                1,
                {
                    "channelId": [
                        559
                    ],
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "openDirectMessage": [
                559,
                {
                    "workspaceMemberId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "prepareGettingStartedWorkflow": [
                312,
                {
                    "stepActionKey": [
                        309,
                        "GettingStartedStepActionKey!"
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                1
            ],
            "releaseEnterpriseServerBinding": [
                264
            ],
            "removeAgentChatMessageReaction": [
                24,
                {
                    "emoji": [
                        4,
                        "String!"
                    ],
                    "messageId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                1,
                {
                    "input": [
                        469,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "removeRecordShare": [
                461,
                {
                    "principal": [
                        458,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        465,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                1,
                {
                    "agentId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                87,
                {
                    "applicationRefreshToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "renewToken": [
                96,
                {
                    "appToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "reopenAgentChatThreadInChannel": [
                1,
                {
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "reportAppConnectionAuthFailure": [
                1,
                {
                    "input": [
                        470,
                        "ReportAppConnectionAuthFailureInput!"
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                471,
                {
                    "affiliatePartnerName": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                507,
                {
                    "appTokenId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetAiChatAssistantProfile": [
                30
            ],
            "resetCommandMenuItem": [
                166,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                423,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                422,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                426,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                535,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "retryChatMessage": [
                499,
                {
                    "modelId": [
                        4
                    ],
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                2
            ],
            "revokeApiKey": [
                44,
                {
                    "input": [
                        472,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                1,
                {
                    "applicationAuthorizationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "revokeTwoFactorAuthenticationRecoveryCode": [
                1,
                {
                    "userId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                1,
                {
                    "userSessionId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "revokeWorkspaceApplicationAuthorization": [
                1,
                {
                    "applicationAuthorizationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                476,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                489,
                {
                    "input": [
                        485,
                        "RunAgentInput!"
                    ]
                }
            ],
            "runApplicationHealthCheck": [
                72,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "runMyApplicationHealthCheck": [
                72,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                323,
                {
                    "connectionParameters": [
                        249,
                        "EmailAccountConnectionParameters!"
                    ],
                    "handle": [
                        4,
                        "String!"
                    ],
                    "id": [
                        559
                    ]
                }
            ],
            "sendAppChannelMessage": [
                498,
                {
                    "input": [
                        497,
                        "SendAppChannelMessageInput!"
                    ]
                }
            ],
            "sendChatMessage": [
                499,
                {
                    "browsingContext": [
                        339
                    ],
                    "channelId": [
                        559
                    ],
                    "fileAttachments": [
                        291,
                        "[FileAttachmentInput!]"
                    ],
                    "isAssistantMentioned": [
                        1
                    ],
                    "isAssistantParticipant": [
                        1
                    ],
                    "mentionedWorkspaceMemberIds": [
                        559,
                        "[UUID!]"
                    ],
                    "messageId": [
                        559,
                        "UUID!"
                    ],
                    "modelId": [
                        4
                    ],
                    "recipientWorkspaceMemberIds": [
                        559,
                        "[UUID!]"
                    ],
                    "shouldAssistantReply": [
                        1
                    ],
                    "text": [
                        4,
                        "String!"
                    ],
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "sendEmail": [
                502,
                {
                    "input": [
                        501,
                        "SendEmailInput!"
                    ]
                }
            ],
            "sendInboxMessage": [
                506,
                {
                    "input": [
                        505,
                        "SendInboxMessageInput!"
                    ]
                }
            ],
            "sendInvitations": [
                507,
                {
                    "emails": [
                        4,
                        "[String!]!"
                    ],
                    "roleId": [
                        559
                    ]
                }
            ],
            "sendMessageCampaign": [
                509,
                {
                    "input": [
                        508,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                504,
                {
                    "input": [
                        510,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                48,
                {
                    "input": [
                        512,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "setAppMessageThreadReadState": [
                514,
                {
                    "input": [
                        513,
                        "SetAppMessageThreadReadStateInput!"
                    ]
                }
            ],
            "setBillingPartnerCode": [
                117,
                {
                    "partnerCode": [
                        4,
                        "String!"
                    ]
                }
            ],
            "setEnterpriseKey": [
                264,
                {
                    "enterpriseKey": [
                        4,
                        "String!"
                    ]
                }
            ],
            "setRecordPrivate": [
                461,
                {
                    "isPrivate": [
                        1,
                        "Boolean!"
                    ],
                    "target": [
                        465,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setRecordShare": [
                461,
                {
                    "accessLevel": [
                        457,
                        "RecordShareAccessLevel!"
                    ],
                    "principal": [
                        458,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        465,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setResourceCreditSubscriptionPrice": [
                136,
                {
                    "priceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                101,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "signOut": [
                1,
                {
                    "refreshToken": [
                        4
                    ]
                }
            ],
            "signUp": [
                101,
                {
                    "affiliatePartnerName": [
                        4
                    ],
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                520,
                {
                    "input": [
                        521
                    ]
                }
            ],
            "signUpInWorkspace": [
                520,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "locale": [
                        4
                    ],
                    "password": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ],
                    "workspaceId": [
                        559
                    ],
                    "workspaceInviteHash": [
                        4
                    ],
                    "workspacePersonalInviteToken": [
                        4
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                419,
                {
                    "isAutoSkipped": [
                        1,
                        "Boolean!"
                    ]
                }
            ],
            "snoozeAgentChatThreadInChannel": [
                1,
                {
                    "snoozedUntil": [
                        223,
                        "DateTime!"
                    ],
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "startChannelSync": [
                152,
                {
                    "connectedAccountId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                524,
                {
                    "companyContext": [
                        339
                    ],
                    "personContext": [
                        339
                    ]
                }
            ],
            "stopAgentChatStream": [
                1,
                {
                    "threadId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "stopGenerate": [
                1,
                {
                    "input": [
                        525,
                        "StopGenerateInput!"
                    ]
                }
            ],
            "stopImpersonation": [
                526
            ],
            "switchBillingPlan": [
                136,
                {
                    "plan": [
                        120
                    ]
                }
            ],
            "switchSubscriptionInterval": [
                136
            ],
            "syncAppMessageFolders": [
                378,
                {
                    "input": [
                        533,
                        "SyncAppMessageFoldersInput!"
                    ]
                }
            ],
            "syncApplication": [
                709,
                {
                    "dryRun": [
                        1
                    ],
                    "inferDeletionFromMissingEntities": [
                        1
                    ],
                    "manifest": [
                        339,
                        "JSON!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                1
            ],
            "syncMcpServerTools": [
                366,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "trackAnalytics": [
                41,
                {
                    "event": [
                        4
                    ],
                    "name": [
                        4
                    ],
                    "properties": [
                        339
                    ],
                    "type": [
                        42,
                        "AnalyticsType!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                82,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "triggerAddPeopleToMessageListJob": [
                542,
                {
                    "input": [
                        541,
                        "TriggerAddPeopleToMessageListJobInput!"
                    ]
                }
            ],
            "triggerInstallApplication": [
                546,
                {
                    "input": [
                        543,
                        "TriggerInstallApplicationInput!"
                    ]
                }
            ],
            "triggerInstallApplicationJob": [
                545,
                {
                    "input": [
                        544,
                        "TriggerInstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUninstallApplication": [
                550,
                {
                    "input": [
                        547,
                        "TriggerUninstallApplicationInput!"
                    ]
                }
            ],
            "triggerUninstallApplicationJob": [
                549,
                {
                    "input": [
                        548,
                        "TriggerUninstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUpgradeApplication": [
                552,
                {
                    "input": [
                        551,
                        "TriggerUpgradeApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                1,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateAgentChatChannel": [
                7,
                {
                    "channelId": [
                        559,
                        "UUID!"
                    ],
                    "input": [
                        564,
                        "UpdateAgentChatChannelInput!"
                    ]
                }
            ],
            "updateAgentChatThreadInboxState": [
                20,
                {
                    "action": [
                        16,
                        "AgentChatInboxAction!"
                    ],
                    "snoozedUntil": [
                        223
                    ],
                    "threadIds": [
                        559,
                        "[UUID!]!"
                    ]
                }
            ],
            "updateApiKey": [
                44,
                {
                    "input": [
                        566,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "updateAppMessageChannel": [
                371,
                {
                    "input": [
                        567,
                        "UpdateAppMessageChannelInput!"
                    ]
                }
            ],
            "updateApplication": [
                54,
                {
                    "id": [
                        559,
                        "UUID!"
                    ],
                    "input": [
                        568,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                82,
                {
                    "input": [
                        569,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                86,
                {
                    "input": [
                        571,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                139,
                {
                    "input": [
                        573,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                166,
                {
                    "input": [
                        575,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                371,
                {
                    "input": [
                        576,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                299,
                {
                    "input": [
                        578,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "updateGettingStarted": [
                308,
                {
                    "input": [
                        580,
                        "UpdateGettingStartedInput!"
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                277,
                {
                    "input": [
                        581,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                398,
                {
                    "inputs": [
                        594,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateManyObjects": [
                401,
                {
                    "inputs": [
                        595,
                        "[UpdateOneObjectInput!]!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                680,
                {
                    "inputs": [
                        617,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "updateMcpServer": [
                366,
                {
                    "input": [
                        584,
                        "UpdateMcpServerInput!"
                    ]
                }
            ],
            "updateMessageChannel": [
                371,
                {
                    "input": [
                        586,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "updateMessageFolder": [
                378,
                {
                    "input": [
                        588,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                378,
                {
                    "input": [
                        590,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateMyUserApplicationVariable": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "key": [
                        4,
                        "String!"
                    ],
                    "value": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                398,
                {
                    "input": [
                        594,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                6,
                {
                    "input": [
                        565,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                1,
                {
                    "applicationId": [
                        559
                    ],
                    "key": [
                        4,
                        "String!"
                    ],
                    "value": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateOneField": [
                279,
                {
                    "input": [
                        593,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                1,
                {
                    "input": [
                        582,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "updateOneObject": [
                401,
                {
                    "input": [
                        595,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "updateOneRole": [
                474,
                {
                    "updateRoleInput": [
                        602,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                422,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        596,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                423,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        597,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                426,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        599,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                422,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        601,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                337,
                {
                    "newPassword": [
                        4,
                        "String!"
                    ],
                    "passwordResetToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "updateSkill": [
                522,
                {
                    "input": [
                        604,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                535,
                {
                    "input": [
                        605,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                562,
                {
                    "input": [
                        606,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUsageLimit": [
                646,
                {
                    "input": [
                        607,
                        "UpdateUsageLimitInput!"
                    ]
                }
            ],
            "updateUserCreditsFallback": [
                111,
                {
                    "userCreditsFallback": [
                        661,
                        "UserCreditsFallback!"
                    ]
                }
            ],
            "updateUserEmail": [
                1,
                {
                    "newEmail": [
                        4,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        4
                    ]
                }
            ],
            "updateValidationRule": [
                666,
                {
                    "input": [
                        608,
                        "UpdateValidationRuleInput!"
                    ]
                }
            ],
            "updateView": [
                671,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        619,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "updateViewField": [
                674,
                {
                    "input": [
                        612,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                675,
                {
                    "input": [
                        610,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                676,
                {
                    "input": [
                        615,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                677,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "input": [
                        614,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewGroup": [
                680,
                {
                    "input": [
                        617,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateViewSort": [
                683,
                {
                    "input": [
                        620,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "updateWebhook": [
                687,
                {
                    "input": [
                        622,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                695,
                {
                    "data": [
                        626,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspaceAllowedEmbeddingOrigins": [
                695,
                {
                    "data": [
                        624,
                        "UpdateWorkspaceAllowedEmbeddingOriginsInput!"
                    ]
                }
            ],
            "updateWorkspaceIframeMediaPermissions": [
                695,
                {
                    "data": [
                        625,
                        "UpdateWorkspaceIframeMediaPermissionsInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                704,
                {
                    "roleId": [
                        559,
                        "UUID!"
                    ],
                    "workspaceMemberId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                1,
                {
                    "input": [
                        627,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "upgradeApplication": [
                1,
                {
                    "appRegistrationId": [
                        4,
                        "String!"
                    ],
                    "targetVersion": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                82,
                {
                    "file": [
                        628,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        4
                    ]
                }
            ],
            "uploadApplicationFile": [
                290,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "file": [
                        628,
                        "Upload!"
                    ],
                    "fileFolder": [
                        292,
                        "FileFolder!"
                    ],
                    "filePath": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                294,
                {
                    "fieldMetadataUniversalIdentifier": [
                        4,
                        "String!"
                    ],
                    "file": [
                        628,
                        "Upload!"
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                294,
                {
                    "file": [
                        628,
                        "Upload!"
                    ],
                    "workspaceId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                294,
                {
                    "file": [
                        628,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                294,
                {
                    "file": [
                        628,
                        "Upload!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                286,
                {
                    "upsertFieldPermissionsInput": [
                        629,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                671,
                {
                    "input": [
                        632,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                409,
                {
                    "upsertObjectPermissionsInput": [
                        633,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                475,
                {
                    "upsertPermissionFlagsInput": [
                        634,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                636,
                {
                    "input": [
                        635,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "upsertViewWidget": [
                671,
                {
                    "input": [
                        637,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                90,
                {
                    "input": [
                        664,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                668,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        4,
                        "String!"
                    ],
                    "origin": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                101,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                253,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                669,
                {
                    "otp": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "NativeModelCapabilities": {
            "twitterSearch": [
                1
            ],
            "webSearch": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "NavigationMenuItem": {
            "agentChatChannelId": [
                559
            ],
            "agentId": [
                559
            ],
            "applicationId": [
                559
            ],
            "color": [
                4
            ],
            "createdAt": [
                223
            ],
            "folderId": [
                559
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "nativePageKey": [
                4
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "targetObjectMetadataId": [
                559
            ],
            "targetRecordId": [
                559
            ],
            "targetRecordIdentifier": [
                454
            ],
            "type": [
                399
            ],
            "updatedAt": [
                223
            ],
            "userWorkspaceId": [
                559
            ],
            "viewId": [
                559
            ],
            "workflowId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "NavigationMenuItemType": {},
        "NotesConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "Object": {
            "applicationId": [
                559
            ],
            "color": [
                4
            ],
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "disabledObjectPermissionActions": [
                4
            ],
            "duplicateCriteria": [
                4
            ],
            "fields": [
                404,
                {
                    "filter": [
                        284,
                        "FieldFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "fieldsList": [
                279
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "imageIdentifierFieldMetadataId": [
                559
            ],
            "indexMetadataList": [
                328
            ],
            "indexMetadatas": [
                406,
                {
                    "filter": [
                        331,
                        "IndexFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isRemote": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUICreatable": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "labelIdentifierFieldMetadataId": [
                559
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "openRecordIn": [
                408
            ],
            "searchFieldMetadataList": [
                495
            ],
            "shortcut": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "ObjectConnection": {
            "edges": [
                403
            ],
            "pageInfo": [
                421
            ],
            "__typename": [
                4
            ]
        },
        "ObjectEdge": {
            "cursor": [
                173
            ],
            "node": [
                401
            ],
            "__typename": [
                4
            ]
        },
        "ObjectFieldsConnection": {
            "edges": [
                283
            ],
            "pageInfo": [
                421
            ],
            "__typename": [
                4
            ]
        },
        "ObjectFilter": {
            "and": [
                405
            ],
            "id": [
                560
            ],
            "isActive": [
                138
            ],
            "isRemote": [
                138
            ],
            "isSearchable": [
                138
            ],
            "isSystem": [
                138
            ],
            "isUICreatable": [
                138
            ],
            "isUIEditable": [
                138
            ],
            "isUIReadOnly": [
                138
            ],
            "or": [
                405
            ],
            "universalIdentifier": [
                560
            ],
            "__typename": [
                4
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "edges": [
                329
            ],
            "pageInfo": [
                421
            ],
            "__typename": [
                4
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ObjectOpenRecordIn": {},
        "ObjectPermission": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "restrictedFields": [
                339
            ],
            "rowLevelPermissionPredicateGroups": [
                478
            ],
            "rowLevelPermissionPredicates": [
                477
            ],
            "uneditableFields": [
                559
            ],
            "unreadableFields": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ObjectPermissionInput": {
            "canDestroyObjectRecords": [
                1
            ],
            "canReadObjectRecords": [
                1
            ],
            "canSoftDeleteObjectRecords": [
                1
            ],
            "canUpdateObjectRecords": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                4
            ],
            "totalCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEvent": {
            "action": [
                222
            ],
            "objectNameSingular": [
                4
            ],
            "properties": [
                413
            ],
            "recordId": [
                4
            ],
            "userId": [
                4
            ],
            "workspaceMemberId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEventProperties": {
            "after": [
                339
            ],
            "before": [
                339
            ],
            "diff": [
                339
            ],
            "updatedFields": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordEventWithQueryIds": {
            "objectRecordEvent": [
                412
            ],
            "queryIds": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "ObjectRecordsPermissions": {
            "canCreateAllRecords": [
                1
            ],
            "canDestroyAllRecords": [
                1
            ],
            "canReadAllRecords": [
                1
            ],
            "canSoftDeleteAllRecords": [
                1
            ],
            "canUpdateAllRecords": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "restrictedFields": [
                339
            ],
            "rowLevelRecordsPermissions": [
                484
            ],
            "uneditableFields": [
                559
            ],
            "unreadableFields": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "OnboardingStatus": {},
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                417
            ],
            "previousOnboardingStatus": [
                417
            ],
            "__typename": [
                4
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "OpenRecordIn": {},
        "PageInfo": {
            "endCursor": [
                173
            ],
            "hasNextPage": [
                1
            ],
            "hasPreviousPage": [
                1
            ],
            "startCursor": [
                173
            ],
            "__typename": [
                4
            ]
        },
        "PageLayout": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                559
            ],
            "deletedAt": [
                223
            ],
            "id": [
                559
            ],
            "isFirstTabPinned": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "tabs": [
                423
            ],
            "type": [
                425
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutTab": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "layoutMode": [
                424
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "widgets": [
                426
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutType": {},
        "PageLayoutWidget": {
            "applicationGrantedIframeMediaPermissions": [
                321
            ],
            "applicationId": [
                559
            ],
            "applicationName": [
                4
            ],
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                339
            ],
            "configuration": [
                688
            ],
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "gridPosition": [
                318
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "pageLayoutTabId": [
                559
            ],
            "position": [
                429
            ],
            "title": [
                4
            ],
            "type": [
                690
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                424
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "column": [
                2
            ],
            "columnSpan": [
                2
            ],
            "layoutMode": [
                424
            ],
            "row": [
                2
            ],
            "rowSpan": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetCanvasPosition": [
                427
            ],
            "on_PageLayoutWidgetGridPosition": [
                428
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                431
            ],
            "__typename": [
                4
            ]
        },
        "PageLayoutWidgetVerticalListHeightBehavior": {},
        "PageLayoutWidgetVerticalListPosition": {
            "heightBehavior": [
                430
            ],
            "index": [
                2
            ],
            "layoutMode": [
                424
            ],
            "__typename": [
                4
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PermissionFlag": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "permissionType": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "PermissionFlagType": {},
        "PieChartConfiguration": {
            "aggregateFieldMetadataId": [
                559
            ],
            "aggregateOperation": [
                28
            ],
            "color": [
                4
            ],
            "configurationType": [
                689
            ],
            "dateGranularity": [
                415
            ],
            "description": [
                4
            ],
            "displayDataLabel": [
                1
            ],
            "displayLegend": [
                1
            ],
            "filter": [
                339
            ],
            "firstDayOfTheWeek": [
                2
            ],
            "groupByFieldMetadataId": [
                559
            ],
            "groupBySubFieldName": [
                4
            ],
            "hideEmptyCategory": [
                1
            ],
            "manualSortOrder": [
                4
            ],
            "numberFormat": [
                153
            ],
            "orderBy": [
                317
            ],
            "showCenterMetric": [
                1
            ],
            "splitMultiValueFields": [
                1
            ],
            "timezone": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PieChartData": {
            "data": [
                438
            ],
            "formattedToRawLookup": [
                339
            ],
            "hasTooManyGroups": [
                1
            ],
            "showCenterMetric": [
                1
            ],
            "showDataLabels": [
                1
            ],
            "showLegend": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "PieChartDataInput": {
            "configuration": [
                339
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "PieChartDataItem": {
            "key": [
                4
            ],
            "value": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "PlaceDetailsResult": {
            "city": [
                4
            ],
            "country": [
                4
            ],
            "location": [
                351
            ],
            "postcode": [
                4
            ],
            "state": [
                4
            ],
            "street": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                4
            ],
            "unsubscribeTopicId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignSendInput": {
            "campaignId": [
                4
            ],
            "scheduledAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "PreviewMessageCampaignSendOutputDTO": {
            "audience": [
                147
            ],
            "blockers": [
                370
            ],
            "__typename": [
                4
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                559
            ],
            "isClaimingVerifiedClientName": [
                1
            ],
            "isVerified": [
                1
            ],
            "logoUrl": [
                4
            ],
            "name": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "websiteUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicConnectionParametersOutput": {
            "connectionSecurity": [
                250
            ],
            "host": [
                4
            ],
            "port": [
                8
            ],
            "username": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicDomain": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "domain": [
                4
            ],
            "id": [
                559
            ],
            "isValidated": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                278
            ],
            "metadata": [
                447
            ],
            "__typename": [
                4
            ]
        },
        "PublicFeatureFlagMetadata": {
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "imagePath": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "PublicImapSmtpCaldavConnectionParameters": {
            "CALDAV": [
                444
            ],
            "IMAP": [
                444
            ],
            "SMTP": [
                444
            ],
            "__typename": [
                4
            ]
        },
        "PublicWorkspaceData": {
            "authBypassProviders": [
                92
            ],
            "authProviders": [
                93
            ],
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "logo": [
                4
            ],
            "workspaceUrls": [
                713
            ],
            "__typename": [
                4
            ]
        },
        "PublicWorkspaceDataSummary": {
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "logo": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "accessGroupPropagationProgress": [
                0
            ],
            "agentChatChannelRoles": [
                10
            ],
            "agentChatChannelSummaries": [
                11
            ],
            "agentChatChannelThreadIds": [
                13,
                {
                    "after": [
                        4
                    ],
                    "assignment": [
                        9
                    ],
                    "channelId": [
                        559,
                        "UUID!"
                    ],
                    "filter": [
                        12
                    ],
                    "first": [
                        2
                    ],
                    "status": [
                        14
                    ]
                }
            ],
            "agentChatChannels": [
                7
            ],
            "agentChatOpenThreadsSummary": [
                17
            ],
            "agentRuns": [
                25,
                {
                    "agentId": [
                        559,
                        "UUID!"
                    ],
                    "limit": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "aiChatUsage": [
                32
            ],
            "aiChatUserCreditsUsage": [
                33
            ],
            "apiKey": [
                44,
                {
                    "input": [
                        305,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "apiKeys": [
                44
            ],
            "appConnection": [
                47,
                {
                    "id": [
                        19,
                        "ID!"
                    ]
                }
            ],
            "appConnections": [
                47,
                {
                    "filter": [
                        348
                    ]
                }
            ],
            "appKeyValue": [
                48,
                {
                    "key": [
                        4,
                        "String!"
                    ],
                    "scope": [
                        49
                    ]
                }
            ],
            "appMessageChannels": [
                371,
                {
                    "filter": [
                        349
                    ]
                }
            ],
            "appMessageFolders": [
                378,
                {
                    "filter": [
                        350
                    ]
                }
            ],
            "applicationConnectedAccounts": [
                57,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "applicationConnectionProviders": [
                58,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "applicationCoreGraphqlSchema": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                4,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                494,
                {
                    "applicationId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "barChartData": [
                104,
                {
                    "input": [
                        105,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "billingPartnerCode": [
                117
            ],
            "billingPlans": [
                119
            ],
            "billingPortalSession": [
                129,
                {
                    "forPaymentMethodUpdate": [
                        1
                    ],
                    "returnUrlPath": [
                        4
                    ]
                }
            ],
            "callRecordingIdForCalendarEvent": [
                559,
                {
                    "calendarEventId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                22,
                {
                    "agentUniversalIdentifier": [
                        559
                    ],
                    "threadId": [
                        559
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                155,
                {
                    "agentUniversalIdentifier": [
                        559
                    ],
                    "threadId": [
                        559
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "chatThread": [
                18,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "checkUserExists": [
                158,
                {
                    "captchaToken": [
                        4
                    ],
                    "email": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                703,
                {
                    "inviteHash": [
                        4,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                527,
                {
                    "subdomain": [
                        4,
                        "String!"
                    ]
                }
            ],
            "commandMenuItem": [
                166,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "commandMenuItems": [
                166
            ],
            "currentUser": [
                659
            ],
            "currentUserApplicationAuthorizations": [
                55
            ],
            "currentUserSessions": [
                662
            ],
            "currentWorkspace": [
                695
            ],
            "enterpriseCheckoutSession": [
                4,
                {
                    "billingInterval": [
                        4
                    ]
                }
            ],
            "enterprisePortalSession": [
                4,
                {
                    "returnUrlPath": [
                        4
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                265
            ],
            "eventLogs": [
                272,
                {
                    "input": [
                        271,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "exportApplication": [
                62,
                {
                    "shouldIncludeDependencies": [
                        1
                    ],
                    "shouldIncludePublicAssets": [
                        1
                    ],
                    "shouldIncludeSourceFiles": [
                        1
                    ],
                    "universalIdentifier": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "field": [
                279,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "fields": [
                281,
                {
                    "filter": [
                        284,
                        "FieldFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                443,
                {
                    "clientId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                82,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationMonitoring": [
                74,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "periodEnd": [
                        223
                    ],
                    "periodStart": [
                        223
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                84,
                {
                    "id": [
                        4,
                        "String!"
                    ],
                    "periodEnd": [
                        223
                    ],
                    "periodStart": [
                        223
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                86,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                159,
                {
                    "sourcePackage": [
                        4
                    ],
                    "universalIdentifier": [
                        4
                    ]
                }
            ],
            "findInstallApplicationJobStatus": [
                342,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                6
            ],
            "findManyApplicationRegistrations": [
                82
            ],
            "findManyApplications": [
                54
            ],
            "findManyLogicFunctions": [
                352
            ],
            "findManyMarketplaceApps": [
                360,
                {
                    "universalIdentifiers": [
                        4,
                        "[String!]"
                    ]
                }
            ],
            "findManyPublicDomains": [
                445
            ],
            "findMarketplaceAppDetail": [
                361,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findOneAgent": [
                6,
                {
                    "input": [
                        21,
                        "AgentIdInput!"
                    ]
                }
            ],
            "findOneApplication": [
                54,
                {
                    "id": [
                        559
                    ],
                    "universalIdentifier": [
                        559
                    ]
                }
            ],
            "findOneApplicationRegistration": [
                82,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                352,
                {
                    "input": [
                        356,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findUninstallApplicationJobStatus": [
                342,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findUpgradeApplicationJobStatus": [
                342,
                {
                    "jobId": [
                        4
                    ],
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                697
            ],
            "findWorkspaceFromInviteHash": [
                695,
                {
                    "inviteHash": [
                        4,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceInvitations": [
                702
            ],
            "frontComponent": [
                299,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                299
            ],
            "getAddressDetails": [
                439,
                {
                    "placeId": [
                        4,
                        "String!"
                    ],
                    "token": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                38
            ],
            "getApiKeyRoles": [
                474
            ],
            "getApprovedAccessDomains": [
                90
            ],
            "getAutoCompleteAddress": [
                98,
                {
                    "address": [
                        4,
                        "String!"
                    ],
                    "country": [
                        4
                    ],
                    "isFieldCity": [
                        1
                    ],
                    "token": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getAvailablePackages": [
                339,
                {
                    "input": [
                        356,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                172,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "getEmailingDomains": [
                253
            ],
            "getInviteSuggestions": [
                338
            ],
            "getJobs": [
                342,
                {
                    "jobIds": [
                        4,
                        "[String!]!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                4,
                {
                    "input": [
                        356,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getPageLayout": [
                422,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                423,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTabs": [
                423,
                {
                    "pageLayoutId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                426,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                426,
                {
                    "pageLayoutTabId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                422,
                {
                    "objectMetadataId": [
                        4
                    ],
                    "pageLayoutType": [
                        425
                    ]
                }
            ],
            "getPermissionFlags": [
                433
            ],
            "getPublicWorkspaceDataByDomain": [
                449,
                {
                    "origin": [
                        4
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                450,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "getResourceCreditUsage": [
                128
            ],
            "getRole": [
                474,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "getRoles": [
                474
            ],
            "getSSOIdentityProviders": [
                296
            ],
            "getToolIndex": [
                539
            ],
            "getToolInputSchema": [
                339,
                {
                    "toolName": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getUsageAnalytics": [
                643,
                {
                    "input": [
                        644
                    ]
                }
            ],
            "getView": [
                671,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                674,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                675,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                675,
                {
                    "viewId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                674,
                {
                    "viewId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilter": [
                676,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroup": [
                677,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroups": [
                677,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewFilters": [
                676,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewGroup": [
                680,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewGroups": [
                680,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViewSort": [
                683,
                {
                    "id": [
                        4,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                683,
                {
                    "viewId": [
                        4
                    ]
                }
            ],
            "getViews": [
                671,
                {
                    "objectMetadataId": [
                        4
                    ],
                    "viewTypes": [
                        685,
                        "[ViewType!]"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                700
            ],
            "gettingStartedProgress": [
                308
            ],
            "gettingStartedWorkflowPreviews": [
                313
            ],
            "githubClaimAuthorizationUrl": [
                4,
                {
                    "applicationRegistrationId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "isApplicationStopped": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "lineChartData": [
                344,
                {
                    "input": [
                        345,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "listPlans": [
                119
            ],
            "mcpServer": [
                366,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "mcpServers": [
                366
            ],
            "messageSuppressions": [
                383,
                {
                    "input": [
                        297,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "metadataTranslations": [
                388,
                {
                    "input": [
                        391,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "minimalMetadata": [
                392
            ],
            "mostlyEmptyFieldMetadataIds": [
                559,
                {
                    "objectMetadataId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "myApplicationPreferences": [
                81
            ],
            "myCalendarChannels": [
                139,
                {
                    "connectedAccountId": [
                        559
                    ]
                }
            ],
            "myConnectedAccounts": [
                170
            ],
            "myMessageChannels": [
                371,
                {
                    "connectedAccountId": [
                        559
                    ]
                }
            ],
            "myMessageFolders": [
                378,
                {
                    "messageChannelId": [
                        559
                    ]
                }
            ],
            "myUserApplicationVariables": [
                705
            ],
            "navigationMenuItem": [
                398,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "navigationMenuItems": [
                398
            ],
            "object": [
                401,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                411
            ],
            "objects": [
                402,
                {
                    "filter": [
                        405,
                        "ObjectFilter!"
                    ],
                    "paging": [
                        221,
                        "CursorPaging!"
                    ]
                }
            ],
            "pieChartData": [
                436,
                {
                    "input": [
                        437,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "previewMessageCampaignAudience": [
                147,
                {
                    "input": [
                        440,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "previewMessageCampaignSend": [
                442,
                {
                    "input": [
                        441,
                        "PreviewMessageCampaignSendInput!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                361,
                {
                    "universalIdentifier": [
                        4,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                360
            ],
            "recordPermissions": [
                456,
                {
                    "targets": [
                        465,
                        "[RecordTargetInput!]!"
                    ]
                }
            ],
            "recordSharing": [
                461,
                {
                    "target": [
                        465,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "relatedRecordPaths": [
                466
            ],
            "skill": [
                522,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "skills": [
                522
            ],
            "timelineActivityTypes": [
                535
            ],
            "twoFactorAuthenticationBackupCodeStatus": [
                553
            ],
            "twoFactorAuthenticationRecoveryStatus": [
                558,
                {
                    "userId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                562
            ],
            "usageLimits": [
                646
            ],
            "usageQuotaDefinitions": [
                650
            ],
            "usageQuotaScopeConsumption": [
                652,
                {
                    "input": [
                        653,
                        "UsageQuotaScopeInput!"
                    ]
                }
            ],
            "usageQuotasWithConsumption": [
                654
            ],
            "validatePasswordResetToken": [
                665,
                {
                    "passwordResetToken": [
                        4,
                        "String!"
                    ]
                }
            ],
            "validationRules": [
                666,
                {
                    "objectMetadataId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "validationRulesReadingField": [
                666,
                {
                    "fieldMetadataId": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "webhook": [
                687,
                {
                    "id": [
                        559,
                        "UUID!"
                    ]
                }
            ],
            "webhooks": [
                687
            ],
            "workspaceApplicationAuthorizations": [
                55
            ],
            "__typename": [
                4
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                559
            ],
            "optionValue": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordExport": {
            "downloadPath": [
                4
            ],
            "errorMessage": [
                4
            ],
            "filename": [
                4
            ],
            "id": [
                559
            ],
            "progress": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "RecordIdentifier": {
            "id": [
                559
            ],
            "imageIdentifier": [
                4
            ],
            "labelIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordPermissionsDTO": {
            "canDelete": [
                1
            ],
            "canRead": [
                1
            ],
            "canSoftDelete": [
                1
            ],
            "canUpdate": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RecordPermissionsResult": {
            "objectMetadataId": [
                559
            ],
            "permissions": [
                455
            ],
            "recordId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RecordShareAccessLevel": {},
        "RecordSharePrincipalInput": {
            "roleId": [
                559
            ],
            "workspaceMemberId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharePrincipalType": {},
        "RecordShareRowCause": {},
        "RecordSharingDTO": {
            "canManageSharing": [
                1
            ],
            "hasManagedGeneralAccess": [
                1
            ],
            "isPrivate": [
                1
            ],
            "isShareable": [
                1
            ],
            "permissions": [
                455
            ],
            "roles": [
                463
            ],
            "shares": [
                462
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharingGrantDTO": {
            "accessLevel": [
                457
            ],
            "id": [
                19
            ],
            "principalId": [
                559
            ],
            "principalRoleId": [
                559
            ],
            "principalType": [
                459
            ],
            "rowCause": [
                460
            ],
            "__typename": [
                4
            ]
        },
        "RecordSharingRoleDTO": {
            "canRead": [
                1
            ],
            "canUpdate": [
                1
            ],
            "id": [
                559
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                689
            ],
            "isUIEditable": [
                1
            ],
            "recordLimit": [
                2
            ],
            "viewId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecordTargetInput": {
            "objectMetadataId": [
                559
            ],
            "recordId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RelatedRecordPath": {
            "firstFieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "isInherent": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "secondFieldMetadataId": [
                559
            ],
            "thirdFieldMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Relation": {
            "sourceFieldMetadata": [
                279
            ],
            "sourceObjectMetadata": [
                401
            ],
            "targetFieldMetadata": [
                279
            ],
            "targetObjectMetadata": [
                401
            ],
            "type": [
                468
            ],
            "__typename": [
                4
            ]
        },
        "RelationType": {},
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                4
            ],
            "queryId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ReportAppConnectionAuthFailureInput": {
            "id": [
                19
            ],
            "reason": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ResendEmailVerificationToken": {
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RichTextBody": {
            "blocknote": [
                4
            ],
            "markdown": [
                4
            ],
            "tiptap": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Role": {
            "agents": [
                6
            ],
            "apiKeys": [
                45
            ],
            "applicationId": [
                559
            ],
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "fieldPermissions": [
                286
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isEditable": [
                1
            ],
            "label": [
                4
            ],
            "objectPermissions": [
                409
            ],
            "permissionFlags": [
                475
            ],
            "rowLevelPermissionFieldPermissions": [
                286
            ],
            "rowLevelPermissionPredicateGroups": [
                478
            ],
            "rowLevelPermissionPredicates": [
                477
            ],
            "rowLevelPermissionRules": [
                483
            ],
            "universalIdentifier": [
                559
            ],
            "workspaceMembers": [
                704
            ],
            "__typename": [
                4
            ]
        },
        "RolePermissionFlag": {
            "flag": [
                4
            ],
            "id": [
                559
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicate": {
            "fieldMetadataId": [
                4
            ],
            "id": [
                4
            ],
            "objectMetadataId": [
                4
            ],
            "operand": [
                482
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "relationFieldMetadataId": [
                4
            ],
            "roleId": [
                4
            ],
            "rowLevelPermissionPredicateGroupId": [
                4
            ],
            "subFieldName": [
                4
            ],
            "value": [
                339
            ],
            "workspaceMemberFieldMetadataId": [
                4
            ],
            "workspaceMemberSubFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                4
            ],
            "logicalOperator": [
                480
            ],
            "objectMetadataId": [
                4
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                4
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "roleId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                559
            ],
            "logicalOperator": [
                480
            ],
            "objectMetadataId": [
                559
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                559
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicateInput": {
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "operand": [
                482
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                8
            ],
            "relationFieldMetadataId": [
                559
            ],
            "rowLevelPermissionPredicateGroupId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "value": [
                339
            ],
            "workspaceMemberFieldMetadataId": [
                4
            ],
            "workspaceMemberSubFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "RowLevelPermissionRule": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "id": [
                559
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RowLevelRecordsPermissions": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "predicateGroups": [
                478
            ],
            "predicates": [
                477
            ],
            "ruleId": [
                559
            ],
            "uneditableFields": [
                559
            ],
            "unreadableFields": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentInput": {
            "additionalInstructions": [
                4
            ],
            "agentUniversalIdentifier": [
                4
            ],
            "input": [
                487
            ],
            "messages": [
                487
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                339
            ],
            "runAsWorkspaceMemberId": [
                559
            ],
            "thread": [
                490
            ],
            "waitForCompletion": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageAttachmentInput": {
            "fileId": [
                559
            ],
            "filename": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageInput": {
            "attachments": [
                486
            ],
            "content": [
                4
            ],
            "role": [
                488
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentMessageRole": {},
        "RunAgentResult": {
            "error": [
                4
            ],
            "result": [
                339
            ],
            "runId": [
                559
            ],
            "status": [
                4
            ],
            "success": [
                1
            ],
            "threadId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "RunAgentThreadInput": {
            "key": [
                4
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SSOConnection": {
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                493
            ],
            "type": [
                319
            ],
            "__typename": [
                4
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                493
            ],
            "type": [
                319
            ],
            "__typename": [
                4
            ]
        },
        "SSOIdentityProviderStatus": {},
        "SdkClientChecksums": {
            "core": [
                4
            ],
            "metadata": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SearchField": {
            "createdAt": [
                223
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "position": [
                8
            ],
            "tsVectorFieldMetadataId": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageEmailInput": {
            "bcc": [
                4
            ],
            "body": [
                4
            ],
            "cc": [
                4
            ],
            "inReplyTo": [
                4
            ],
            "subject": [
                4
            ],
            "to": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageInput": {
            "email": [
                496
            ],
            "idempotencyKey": [
                559
            ],
            "messageChannelId": [
                559
            ],
            "messageThreadId": [
                559
            ],
            "text": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendAppChannelMessageOutput": {
            "messageId": [
                559
            ],
            "messageThreadId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "SendChatMessageResult": {
            "mentionedParticipantWorkspaceMemberIds": [
                559
            ],
            "messageId": [
                4
            ],
            "queued": [
                1
            ],
            "recipientParticipantWorkspaceMemberIds": [
                559
            ],
            "streamId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailInput": {
            "bcc": [
                4
            ],
            "body": [
                4
            ],
            "cc": [
                4
            ],
            "connectedAccountId": [
                4
            ],
            "draftMessageId": [
                4
            ],
            "files": [
                500
            ],
            "fromHandle": [
                4
            ],
            "inReplyTo": [
                4
            ],
            "subject": [
                4
            ],
            "targetRecord": [
                503
            ],
            "to": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailOutput": {
            "error": [
                4
            ],
            "messageThreadId": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailTargetRecordInput": {
            "objectNameSingular": [
                4
            ],
            "recordId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SendInboxMessageInput": {
            "idempotencyKey": [
                4
            ],
            "text": [
                4
            ],
            "threadKey": [
                4
            ],
            "title": [
                4
            ],
            "toolCall": [
                339
            ],
            "workspaceMemberIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "SendInboxMessageResult": {
            "threadId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "SendInvitations": {
            "errors": [
                4
            ],
            "result": [
                702
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                4
            ],
            "scheduledAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "audience": [
                147
            ],
            "campaignId": [
                4
            ],
            "queuedCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "SendMessageCampaignTestInput": {
            "body": [
                4
            ],
            "fromAddress": [
                4
            ],
            "subject": [
                4
            ],
            "toAddress": [
                4
            ],
            "unsubscribeTopicId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Sentry": {
            "dsn": [
                4
            ],
            "environment": [
                4
            ],
            "release": [
                4
            ],
            "tracesSampleRate": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                4
            ],
            "scope": [
                49
            ],
            "value": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "SetAppMessageThreadReadStateInput": {
            "isRead": [
                1
            ],
            "messageChannelId": [
                559
            ],
            "threadExternalId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SetAppMessageThreadReadStateOutput": {
            "updatedMessageCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "SettingsMenuItem": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "frontComponentId": [
                559
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "position": [
                8
            ],
            "scope": [
                516
            ],
            "slug": [
                4
            ],
            "title": [
                4
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "SettingsMenuItemScope": {},
        "SetupOIDCSsoInput": {
            "clientID": [
                4
            ],
            "clientSecret": [
                4
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SetupSAMLSsoInput": {
            "certificate": [
                4
            ],
            "fingerprint": [
                4
            ],
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "ssoURL": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SetupSso": {
            "id": [
                559
            ],
            "issuer": [
                4
            ],
            "name": [
                4
            ],
            "status": [
                493
            ],
            "type": [
                319
            ],
            "__typename": [
                4
            ]
        },
        "SignUp": {
            "loginToken": [
                94
            ],
            "workspace": [
                714
            ],
            "__typename": [
                4
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "affiliatePartnerName": [
                4
            ],
            "captchaToken": [
                4
            ],
            "displayName": [
                4
            ],
            "subdomain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Skill": {
            "applicationId": [
                559
            ],
            "content": [
                4
            ],
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystem": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "StandaloneRichTextConfiguration": {
            "body": [
                473
            ],
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                712
            ],
            "thread": [
                18
            ],
            "__typename": [
                4
            ]
        },
        "StopGenerateInput": {
            "runId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "SubdomainAvailabilityDTO": {
            "available": [
                1
            ],
            "isValid": [
                1
            ],
            "suggestedSubdomain": [
                4
            ],
            "suggestedSubdomains": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "eventLogsLive": [
                273,
                {
                    "fieldFilters": [
                        267,
                        "[EventLogFieldFilterInput!]"
                    ],
                    "table": [
                        274,
                        "EventLogTable!"
                    ]
                }
            ],
            "exportRecords": [
                453,
                {
                    "input": [
                        205,
                        "CreateRecordExportInput!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                357,
                {
                    "input": [
                        358,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                15,
                {
                    "agentUniversalIdentifier": [
                        559
                    ],
                    "runId": [
                        559
                    ],
                    "threadId": [
                        559
                    ],
                    "threadKey": [
                        4
                    ]
                }
            ],
            "onEventSubscription": [
                275,
                {
                    "eventStreamId": [
                        4,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "SubscriptionInterval": {},
        "SubscriptionStatus": {},
        "Support": {
            "supportDriver": [
                532
            ],
            "supportFrontChatId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "SupportDriver": {},
        "SyncAppMessageFoldersInput": {
            "folders": [
                51
            ],
            "messageChannelId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "TasksConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityType": {
            "action": [
                4
            ],
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "emit": [
                536
            ],
            "frontComponentUniversalIdentifier": [
                559
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "objectUniversalIdentifier": [
                559
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                559
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityTypeEmit": {
            "objectUniversalIdentifier": [
                559
            ],
            "on": [
                4
            ],
            "through": [
                537
            ],
            "__typename": [
                4
            ]
        },
        "TimelineActivityTypeEmitThrough": {
            "happensAtFieldUniversalIdentifier": [
                559
            ],
            "relationFieldUniversalIdentifier": [
                559
            ],
            "triggerFieldUniversalIdentifiers": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "ToolIndexEntry": {
            "category": [
                4
            ],
            "description": [
                4
            ],
            "frontComponentId": [
                4
            ],
            "icon": [
                4
            ],
            "inputSchema": [
                339
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "objectName": [
                4
            ],
            "widgetName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TransientToken": {
            "transientToken": [
                94
            ],
            "__typename": [
                4
            ]
        },
        "TriggerAddPeopleToMessageListJobInput": {
            "messageListId": [
                559
            ],
            "personFilter": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "TriggerAddPeopleToMessageListJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationJobInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerInstallApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationJobInput": {
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationJobResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUninstallApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUpgradeApplicationInput": {
            "targetVersion": [
                4
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TriggerUpgradeApplicationResult": {
            "jobId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationBackupCodeStatus": {
            "remainingBackupCodeCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationBackupCodes": {
            "backupCodes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationMethodSummary": {
            "status": [
                4
            ],
            "strategy": [
                4
            ],
            "twoFactorAuthenticationMethodId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryCode": {
            "expiresAt": [
                223
            ],
            "recoveryCode": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryCodeRedemption": {
            "isTwoFactorAuthenticationReset": [
                1
            ],
            "provisioningUri": [
                4
            ],
            "tokens": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "TwoFactorAuthenticationRecoveryStatus": {
            "hasVerifiedTwoFactorAuthenticationMethod": [
                1
            ],
            "isAwaitingRecoveryEnrollment": [
                1
            ],
            "pendingRecoveryCodeExpiresAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "UUID": {},
        "UUIDFilterComparison": {
            "eq": [
                559
            ],
            "gt": [
                559
            ],
            "gte": [
                559
            ],
            "iLike": [
                559
            ],
            "in": [
                559
            ],
            "is": [
                1
            ],
            "isNot": [
                1
            ],
            "like": [
                559
            ],
            "lt": [
                559
            ],
            "lte": [
                559
            ],
            "neq": [
                559
            ],
            "notILike": [
                559
            ],
            "notIn": [
                559
            ],
            "notLike": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UnsubscribeHostnameStatus": {},
        "UnsubscribeTopic": {
            "createdAt": [
                223
            ],
            "description": [
                4
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "updatedAt": [
                223
            ],
            "visibility": [
                563
            ],
            "__typename": [
                4
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "UpdateAgentChatChannelInput": {
            "color": [
                4
            ],
            "icon": [
                4
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "roleIds": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpdateAgentInput": {
            "avatarColor": [
                4
            ],
            "avatarShape": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "modelConfiguration": [
                339
            ],
            "modelId": [
                4
            ],
            "name": [
                4
            ],
            "prompt": [
                4
            ],
            "responseFormat": [
                339
            ],
            "roleId": [
                559
            ],
            "triggers": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApiKeyInput": {
            "expiresAt": [
                4
            ],
            "id": [
                559
            ],
            "name": [
                4
            ],
            "revokedAt": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateAppMessageChannelInput": {
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "isSyncEnabled": [
                1
            ],
            "messagingProviderUniversalIdentifier": [
                559
            ],
            "visibility": [
                377
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                4
            ],
            "update": [
                570
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                4
            ],
            "oAuthRedirectUris": [
                4
            ],
            "oAuthScopes": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                4
            ],
            "update": [
                572
            ],
            "__typename": [
                4
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "description": [
                4
            ],
            "resetValue": [
                1
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                559
            ],
            "update": [
                574
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                140
            ],
            "excludePrivateEvents": [
                1
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "visibility": [
                143
            ],
            "__typename": [
                4
            ]
        },
        "UpdateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                4
            ],
            "availabilityObjectMetadataId": [
                559
            ],
            "availabilityType": [
                167
            ],
            "engineComponentKey": [
                257
            ],
            "hotKeys": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isPinned": [
                1
            ],
            "label": [
                4
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "shortLabel": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFieldInput": {
            "defaultValue": [
                339
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "isAuditLogged": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isNullable": [
                1
            ],
            "isSearchable": [
                1
            ],
            "isSystem": [
                1
            ],
            "isUIEditable": [
                1
            ],
            "isUIReadOnly": [
                1
            ],
            "isUnique": [
                1
            ],
            "label": [
                4
            ],
            "morphRelationsUpdatePayload": [
                339
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "options": [
                339
            ],
            "settings": [
                339
            ],
            "translations": [
                389
            ],
            "universalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                559
            ],
            "update": [
                579
            ],
            "__typename": [
                4
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "description": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateGettingStartedInput": {
            "completedStepActionKey": [
                309
            ],
            "completedStepChatThreadId": [
                4
            ],
            "isHidden": [
                1
            ],
            "selectedStepActionKey": [
                309
            ],
            "snoozedUntil": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                559
            ],
            "update": [
                583
            ],
            "__typename": [
                4
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "cronTriggerSettings": [
                339
            ],
            "databaseEventTriggerSettings": [
                339
            ],
            "description": [
                4
            ],
            "handlerName": [
                4
            ],
            "httpRouteTriggerSettings": [
                339
            ],
            "name": [
                4
            ],
            "sourceHandlerCode": [
                4
            ],
            "sourceHandlerPath": [
                4
            ],
            "timeoutSeconds": [
                8
            ],
            "toolTriggerSettings": [
                339
            ],
            "workflowActionTriggerSettings": [
                339
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMcpServerInput": {
            "id": [
                559
            ],
            "update": [
                585
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMcpServerInputUpdates": {
            "connectionProviderId": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "url": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                559
            ],
            "update": [
                587
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                372
            ],
            "excludeGroupEmails": [
                1
            ],
            "excludeNonProfessionalEmails": [
                1
            ],
            "isContactAutoCreationEnabled": [
                1
            ],
            "isSyncEnabled": [
                1
            ],
            "messageFolderImportPolicy": [
                379
            ],
            "visibility": [
                377
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                559
            ],
            "update": [
                589
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                559
            ],
            "update": [
                589
            ],
            "__typename": [
                4
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "color": [
                4
            ],
            "folderId": [
                559
            ],
            "icon": [
                4
            ],
            "link": [
                4
            ],
            "name": [
                4
            ],
            "pageLayoutId": [
                559
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateObjectPayload": {
            "color": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "imageIdentifierFieldMetadataId": [
                559
            ],
            "isActive": [
                1
            ],
            "isLabelSyncedWithName": [
                1
            ],
            "isSearchable": [
                1
            ],
            "labelIdentifierFieldMetadataId": [
                559
            ],
            "labelPlural": [
                4
            ],
            "labelSingular": [
                4
            ],
            "namePlural": [
                4
            ],
            "nameSingular": [
                4
            ],
            "openRecordIn": [
                408
            ],
            "shortcut": [
                4
            ],
            "translations": [
                389
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                559
            ],
            "update": [
                577
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                559
            ],
            "update": [
                591
            ],
            "__typename": [
                4
            ]
        },
        "UpdateOneObjectInput": {
            "id": [
                559
            ],
            "update": [
                592
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "type": [
                425
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutTabInput": {
            "icon": [
                4
            ],
            "layoutMode": [
                424
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "layoutMode": [
                424
            ],
            "position": [
                8
            ],
            "title": [
                4
            ],
            "widgets": [
                600
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                339
            ],
            "configuration": [
                339
            ],
            "isActive": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "pageLayoutTabId": [
                559
            ],
            "position": [
                339
            ],
            "title": [
                4
            ],
            "type": [
                690
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "conditionalAvailabilityExpression": [
                4
            ],
            "conditionalDisplay": [
                339
            ],
            "configuration": [
                339
            ],
            "id": [
                559
            ],
            "objectMetadataId": [
                559
            ],
            "pageLayoutTabId": [
                559
            ],
            "position": [
                339
            ],
            "title": [
                4
            ],
            "type": [
                690
            ],
            "__typename": [
                4
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "isFirstTabPinned": [
                1
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "tabs": [
                598
            ],
            "type": [
                425
            ],
            "__typename": [
                4
            ]
        },
        "UpdateRoleInput": {
            "id": [
                559
            ],
            "update": [
                603
            ],
            "__typename": [
                4
            ]
        },
        "UpdateRolePayload": {
            "canAccessAllAgentChatChannels": [
                1
            ],
            "canAccessAllTools": [
                1
            ],
            "canBeAssignedToAgents": [
                1
            ],
            "canBeAssignedToApiKeys": [
                1
            ],
            "canBeAssignedToUsers": [
                1
            ],
            "canDestroyAllObjectRecords": [
                1
            ],
            "canReadAllObjectRecords": [
                1
            ],
            "canSoftDeleteAllObjectRecords": [
                1
            ],
            "canUpdateAllObjectRecords": [
                1
            ],
            "canUpdateAllSettings": [
                1
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "label": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateSkillInput": {
            "content": [
                4
            ],
            "description": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "label": [
                4
            ],
            "translations": [
                389
            ],
            "__typename": [
                4
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "description": [
                4
            ],
            "id": [
                4
            ],
            "name": [
                4
            ],
            "visibility": [
                563
            ],
            "__typename": [
                4
            ]
        },
        "UpdateUsageLimitInput": {
            "id": [
                559
            ],
            "payload": [
                210
            ],
            "__typename": [
                4
            ]
        },
        "UpdateValidationRuleInput": {
            "id": [
                559
            ],
            "update": [
                609
            ],
            "__typename": [
                4
            ]
        },
        "UpdateValidationRuleInputUpdates": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                559
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                559
            ],
            "update": [
                611
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "deletedAt": [
                4
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                559
            ],
            "update": [
                613
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "aggregateOperation": [
                28
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldGroupId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                559
            ],
            "logicalOperator": [
                678
            ],
            "parentViewFilterGroupId": [
                559
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "viewId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                559
            ],
            "update": [
                616
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                559
            ],
            "operand": [
                679
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "value": [
                339
            ],
            "viewFilterGroupId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                559
            ],
            "update": [
                618
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                559
            ],
            "fieldValue": [
                4
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewInput": {
            "anyFieldFilterValue": [
                4
            ],
            "calendarEndFieldMetadataId": [
                559
            ],
            "calendarFieldMetadataId": [
                559
            ],
            "calendarLayout": [
                672
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isCompact": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                559
            ],
            "kanbanColumnWidth": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                559
            ],
            "name": [
                4
            ],
            "openRecordIn": [
                682
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "translations": [
                389
            ],
            "type": [
                685
            ],
            "visibility": [
                686
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                559
            ],
            "update": [
                621
            ],
            "__typename": [
                4
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                684
            ],
            "subFieldName": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                559
            ],
            "update": [
                623
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWebhookInputUpdates": {
            "description": [
                4
            ],
            "operations": [
                4
            ],
            "roleId": [
                559
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceAllowedEmbeddingOriginsInput": {
            "operation": [
                4
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceIframeMediaPermissionsInput": {
            "camera": [
                1
            ],
            "microphone": [
                1
            ],
            "origin": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceInput": {
            "aiAdditionalInstructions": [
                4
            ],
            "aiAgentModelTier": [
                36
            ],
            "aiChatAssistantProfile": [
                31
            ],
            "aiChatDirectMessageAssistantMode": [
                29
            ],
            "aiChatInboxAssistantMode": [
                29
            ],
            "aiChatModelTier": [
                36
            ],
            "aiDataPolicy": [
                35
            ],
            "aiEvaluationModelId": [
                4
            ],
            "aiModelIdByTier": [
                339
            ],
            "allowImpersonation": [
                1
            ],
            "customDomain": [
                4
            ],
            "defaultRoleId": [
                559
            ],
            "displayName": [
                4
            ],
            "editableProfileFields": [
                4
            ],
            "eventLogRetentionDays": [
                8
            ],
            "inviteHash": [
                4
            ],
            "isAutoModelSelectionEnabled": [
                1
            ],
            "isCampaignClickTrackingEnabled": [
                1
            ],
            "isCampaignOpenTrackingEnabled": [
                1
            ],
            "isGoogleAuthBypassEnabled": [
                1
            ],
            "isGoogleAuthEnabled": [
                1
            ],
            "isInternalMessagesImportEnabled": [
                1
            ],
            "isMicrosoftAuthBypassEnabled": [
                1
            ],
            "isMicrosoftAuthEnabled": [
                1
            ],
            "isPasswordAuthBypassEnabled": [
                1
            ],
            "isPasswordAuthEnabled": [
                1
            ],
            "isPublicInviteLinkEnabled": [
                1
            ],
            "isTwoFactorAuthenticationEnforced": [
                1
            ],
            "logo": [
                4
            ],
            "subdomain": [
                4
            ],
            "trashRetentionDays": [
                8
            ],
            "workspaceDiscoverability": [
                701
            ],
            "__typename": [
                4
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "update": [
                339
            ],
            "workspaceMemberId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "Upload": {},
        "UpsertFieldPermissionsInput": {
            "fieldPermissions": [
                287
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "fieldMetadataId": [
                559
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "viewFieldId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "fields": [
                630
            ],
            "id": [
                559
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpsertFieldsWidgetInput": {
            "fields": [
                630
            ],
            "groups": [
                631
            ],
            "widgetId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertObjectPermissionsInput": {
            "objectPermissions": [
                410
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertPermissionFlagsInput": {
            "permissionFlagKeys": [
                4
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "canCreateRecords": [
                1
            ],
            "canDestroyRecords": [
                1
            ],
            "canReadRecords": [
                1
            ],
            "canSoftDeleteRecords": [
                1
            ],
            "canUpdateRecords": [
                1
            ],
            "objectMetadataId": [
                559
            ],
            "predicateGroups": [
                479
            ],
            "predicates": [
                481
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicateGroups": [
                478
            ],
            "predicates": [
                477
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetInput": {
            "view": [
                641
            ],
            "viewFields": [
                638
            ],
            "viewFilterGroups": [
                639
            ],
            "viewFilters": [
                640
            ],
            "viewSorts": [
                642
            ],
            "widgetId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "aggregateOperation": [
                28
            ],
            "fieldMetadataId": [
                559
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "viewFieldId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                559
            ],
            "logicalOperator": [
                678
            ],
            "parentViewFilterGroupId": [
                559
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "operand": [
                679
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "value": [
                339
            ],
            "viewFilterGroupId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "calendarEndFieldMetadataId": [
                559
            ],
            "calendarFieldMetadataId": [
                559
            ],
            "calendarLayout": [
                672
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                559
            ],
            "kanbanColumnWidth": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                559
            ],
            "openRecordIn": [
                682
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                685
            ],
            "__typename": [
                4
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "direction": [
                684
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UsageAnalytics": {
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "timeSeries": [
                656
            ],
            "usageByApplication": [
                645
            ],
            "usageByModel": [
                645
            ],
            "usageByOperationType": [
                645
            ],
            "usageByUser": [
                645
            ],
            "userDailyUsage": [
                658
            ],
            "__typename": [
                4
            ]
        },
        "UsageAnalyticsInput": {
            "operationTypes": [
                648
            ],
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UsageBreakdownItem": {
            "creditsUsed": [
                8
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "userCreditsUsed": [
                8
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UsageLimit": {
            "burstValue": [
                109
            ],
            "createdAt": [
                223
            ],
            "id": [
                559
            ],
            "limitKind": [
                4
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                648
            ],
            "periodCount": [
                2
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                655
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                657
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "UsageLimitOperationDefinition": {
            "allowedUnits": [
                657
            ],
            "operationType": [
                648
            ],
            "__typename": [
                4
            ]
        },
        "UsageOperationType": {},
        "UsageQuotaDefinition": {
            "allowedOperations": [
                647
            ],
            "allowedSpenderTypes": [
                4
            ],
            "limitKind": [
                4
            ],
            "operatorOnlyScopes": [
                651
            ],
            "resourceType": [
                655
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaDefinitions": {
            "definitions": [
                649
            ],
            "hasAllowancePeriod": [
                1
            ],
            "isIntraWorkspaceLimitEntitled": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaOperatorOnlyScope": {
            "operationType": [
                648
            ],
            "periodUnit": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                657
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaScopeConsumption": {
            "consumedValue": [
                109
            ],
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaScopeInput": {
            "operationType": [
                648
            ],
            "periodUnit": [
                4
            ],
            "resourceType": [
                655
            ],
            "spenderId": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                657
            ],
            "__typename": [
                4
            ]
        },
        "UsageQuotaWithConsumption": {
            "consumedValue": [
                109
            ],
            "id": [
                559
            ],
            "isEnforced": [
                1
            ],
            "limitValue": [
                109
            ],
            "operationType": [
                648
            ],
            "periodEnd": [
                223
            ],
            "periodStart": [
                223
            ],
            "periodUnit": [
                4
            ],
            "remainingValue": [
                109
            ],
            "resourceType": [
                655
            ],
            "spenderId": [
                4
            ],
            "spenderLabel": [
                4
            ],
            "spenderType": [
                4
            ],
            "unit": [
                657
            ],
            "__typename": [
                4
            ]
        },
        "UsageResourceType": {},
        "UsageTimeSeries": {
            "creditsUsed": [
                8
            ],
            "date": [
                4
            ],
            "workspaceCreditsUsed": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "UsageUnit": {},
        "UsageUserDaily": {
            "dailyUsage": [
                656
            ],
            "userWorkspaceId": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "User": {
            "availableWorkspaces": [
                100
            ],
            "canAccessFullAdminPanel": [
                1
            ],
            "canImpersonate": [
                1
            ],
            "createdAt": [
                223
            ],
            "currentUserWorkspace": [
                663
            ],
            "currentWorkspace": [
                695
            ],
            "deletedAt": [
                223
            ],
            "deletedWorkspaceMembers": [
                236
            ],
            "disabled": [
                1
            ],
            "email": [
                4
            ],
            "firstName": [
                4
            ],
            "hasPassword": [
                1
            ],
            "id": [
                559
            ],
            "isEmailVerified": [
                1
            ],
            "isWorkspaceCreator": [
                1
            ],
            "lastName": [
                4
            ],
            "locale": [
                4
            ],
            "onboardingStatus": [
                417
            ],
            "previousOnboardingStatus": [
                417
            ],
            "supportUserHash": [
                4
            ],
            "updatedAt": [
                223
            ],
            "userVars": [
                340
            ],
            "userWorkspaces": [
                663
            ],
            "workspaceMember": [
                704
            ],
            "workspaceMembers": [
                704
            ],
            "workspaces": [
                663
            ],
            "__typename": [
                4
            ]
        },
        "UserApplicationVariableValue": {
            "description": [
                4
            ],
            "isDeprecated": [
                1
            ],
            "isRequired": [
                1
            ],
            "isSecret": [
                1
            ],
            "key": [
                4
            ],
            "label": [
                4
            ],
            "options": [
                339
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "UserCreditsFallback": {},
        "UserSession": {
            "authProvider": [
                4
            ],
            "city": [
                4
            ],
            "country": [
                4
            ],
            "createdAt": [
                223
            ],
            "expiresAt": [
                223
            ],
            "id": [
                559
            ],
            "ipAddress": [
                4
            ],
            "isCurrent": [
                1
            ],
            "isImpersonating": [
                1
            ],
            "lastActiveAt": [
                223
            ],
            "region": [
                4
            ],
            "userAgent": [
                4
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "UserWorkspace": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "id": [
                559
            ],
            "isImpersonating": [
                1
            ],
            "locale": [
                4
            ],
            "objectRecordsPermissions": [
                416
            ],
            "permissionFlags": [
                434
            ],
            "twoFactorAuthenticationMethodSummary": [
                555
            ],
            "updatedAt": [
                223
            ],
            "user": [
                659
            ],
            "userId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "approvedAccessDomainId": [
                559
            ],
            "validationToken": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ValidatePasswordResetToken": {
            "email": [
                4
            ],
            "hasPassword": [
                1
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ValidationRule": {
            "description": [
                4
            ],
            "errorFieldMetadataId": [
                559
            ],
            "expression": [
                4
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "message": [
                4
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "VerificationRecord": {
            "key": [
                4
            ],
            "priority": [
                8
            ],
            "status": [
                4
            ],
            "type": [
                4
            ],
            "value": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                94
            ],
            "workspaceUrls": [
                713
            ],
            "__typename": [
                4
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "backupCodes": [
                4
            ],
            "success": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "VersionDistributionEntry": {
            "count": [
                2
            ],
            "version": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "View": {
            "anyFieldFilterValue": [
                4
            ],
            "applicationId": [
                559
            ],
            "calendarEndFieldMetadataId": [
                559
            ],
            "calendarFieldMetadataId": [
                559
            ],
            "calendarLayout": [
                672
            ],
            "createdAt": [
                223
            ],
            "createdByUserWorkspaceId": [
                559
            ],
            "deletedAt": [
                223
            ],
            "groupLoadLimit": [
                2
            ],
            "icon": [
                4
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isCompact": [
                1
            ],
            "isCustom": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "kanbanAggregateOperation": [
                28
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                559
            ],
            "kanbanColumnWidth": [
                2
            ],
            "key": [
                681
            ],
            "mainGroupByFieldMetadataId": [
                559
            ],
            "name": [
                4
            ],
            "objectMetadataId": [
                559
            ],
            "openRecordIn": [
                682
            ],
            "position": [
                8
            ],
            "shouldDisplayGroupsAsTabs": [
                1
            ],
            "shouldHideEmptyGroups": [
                1
            ],
            "type": [
                685
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "viewFieldGroups": [
                675
            ],
            "viewFields": [
                674
            ],
            "viewFilterGroups": [
                677
            ],
            "viewFilters": [
                676
            ],
            "viewGroups": [
                680
            ],
            "viewSorts": [
                683
            ],
            "visibility": [
                686
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewCalendarLayout": {},
        "ViewConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "ViewField": {
            "aggregateOperation": [
                28
            ],
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isSystemSideEffect": [
                1
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "size": [
                8
            ],
            "universalIdentifier": [
                559
            ],
            "updatedAt": [
                223
            ],
            "viewFieldGroupId": [
                559
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewFieldGroup": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "id": [
                559
            ],
            "isActive": [
                1
            ],
            "isOverridden": [
                1
            ],
            "isVisible": [
                1
            ],
            "name": [
                4
            ],
            "position": [
                8
            ],
            "updatedAt": [
                223
            ],
            "viewFields": [
                674
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilter": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "operand": [
                679
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "relationTargetFieldMetadataId": [
                559
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                223
            ],
            "value": [
                339
            ],
            "viewFilterGroupId": [
                559
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilterGroup": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "id": [
                559
            ],
            "logicalOperator": [
                678
            ],
            "parentViewFilterGroupId": [
                559
            ],
            "positionInViewFilterGroup": [
                8
            ],
            "updatedAt": [
                223
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilterOperand": {},
        "ViewGroup": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "fieldValue": [
                4
            ],
            "id": [
                559
            ],
            "isVisible": [
                1
            ],
            "position": [
                8
            ],
            "updatedAt": [
                223
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewSort": {
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "direction": [
                684
            ],
            "fieldMetadataId": [
                559
            ],
            "id": [
                559
            ],
            "subFieldName": [
                4
            ],
            "updatedAt": [
                223
            ],
            "viewId": [
                559
            ],
            "workspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "ViewSortDirection": {},
        "ViewType": {},
        "ViewVisibility": {},
        "Webhook": {
            "applicationId": [
                559
            ],
            "createdAt": [
                223
            ],
            "deletedAt": [
                223
            ],
            "description": [
                4
            ],
            "id": [
                559
            ],
            "operations": [
                4
            ],
            "role": [
                474
            ],
            "secret": [
                4
            ],
            "targetUrl": [
                4
            ],
            "updatedAt": [
                223
            ],
            "__typename": [
                4
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                27
            ],
            "on_BarChartConfiguration": [
                103
            ],
            "on_CalendarConfiguration": [
                144
            ],
            "on_CallRecordingSummaryConfiguration": [
                145
            ],
            "on_CallRecordingTranscriptConfiguration": [
                146
            ],
            "on_ChatConfiguration": [
                154
            ],
            "on_ChatThreadsConfiguration": [
                157
            ],
            "on_EmailThreadConfiguration": [
                252
            ],
            "on_EmailsConfiguration": [
                256
            ],
            "on_FieldConfiguration": [
                280
            ],
            "on_FieldRichTextConfiguration": [
                288
            ],
            "on_FieldsConfiguration": [
                289
            ],
            "on_FilesConfiguration": [
                295
            ],
            "on_FormFieldConfiguration": [
                298
            ],
            "on_FrontComponentConfiguration": [
                300
            ],
            "on_IframeConfiguration": [
                320
            ],
            "on_LineChartConfiguration": [
                343
            ],
            "on_MessageCampaignBodyConfiguration": [
                368
            ],
            "on_MessageCampaignDetailsConfiguration": [
                369
            ],
            "on_NotesConfiguration": [
                400
            ],
            "on_PieChartConfiguration": [
                435
            ],
            "on_RecordTableConfiguration": [
                464
            ],
            "on_StandaloneRichTextConfiguration": [
                523
            ],
            "on_TasksConfiguration": [
                534
            ],
            "on_TimelineConfiguration": [
                538
            ],
            "on_ViewConfiguration": [
                673
            ],
            "on_WorkflowConfiguration": [
                692
            ],
            "on_WorkflowRunConfiguration": [
                693
            ],
            "on_WorkflowVersionConfiguration": [
                694
            ],
            "__typename": [
                4
            ]
        },
        "WidgetConfigurationType": {},
        "WidgetType": {},
        "WorkflowActionType": {},
        "WorkflowConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                689
            ],
            "__typename": [
                4
            ]
        },
        "Workspace": {
            "activationStatus": [
                696
            ],
            "aiAdditionalInstructions": [
                4
            ],
            "aiAgentModelTier": [
                36
            ],
            "aiChatAssistantProfile": [
                30
            ],
            "aiChatDirectMessageAssistantMode": [
                29
            ],
            "aiChatInboxAssistantMode": [
                29
            ],
            "aiChatModelTier": [
                36
            ],
            "aiDataPolicy": [
                34
            ],
            "aiEvaluationModelId": [
                4
            ],
            "aiModelIdByTier": [
                339
            ],
            "allowImpersonation": [
                1
            ],
            "allowedEmbeddingOrigins": [
                4
            ],
            "billingCustomer": [
                111
            ],
            "billingEntitlements": [
                113
            ],
            "billingSubscriptions": [
                130
            ],
            "createdAt": [
                223
            ],
            "currentBillingSubscription": [
                130
            ],
            "customDomain": [
                4
            ],
            "databaseSchema": [
                4
            ],
            "defaultRole": [
                474
            ],
            "deletedAt": [
                223
            ],
            "displayName": [
                4
            ],
            "editableProfileFields": [
                4
            ],
            "eventLogRetentionDays": [
                8
            ],
            "featureFlags": [
                277
            ],
            "hasValidEnterpriseValidityToken": [
                1
            ],
            "hasValidSignedEnterpriseKey": [
                1
            ],
            "id": [
                559
            ],
            "iframeMediaPermissions": [
                321
            ],
            "installedApplications": [
                54
            ],
            "inviteHash": [
                4
            ],
            "isAutoModelSelectionEnabled": [
                1
            ],
            "isCampaignClickTrackingEnabled": [
                1
            ],
            "isCampaignOpenTrackingEnabled": [
                1
            ],
            "isCustomDomainEnabled": [
                1
            ],
            "isGoogleAuthBypassEnabled": [
                1
            ],
            "isGoogleAuthEnabled": [
                1
            ],
            "isInternalMessagesImportEnabled": [
                1
            ],
            "isMicrosoftAuthBypassEnabled": [
                1
            ],
            "isMicrosoftAuthEnabled": [
                1
            ],
            "isPasswordAuthBypassEnabled": [
                1
            ],
            "isPasswordAuthEnabled": [
                1
            ],
            "isPublicInviteLinkEnabled": [
                1
            ],
            "isTrialAvailable": [
                1
            ],
            "isTwoFactorAuthenticationEnforced": [
                1
            ],
            "logo": [
                4
            ],
            "logoFileId": [
                559
            ],
            "metadataVersion": [
                8
            ],
            "subdomain": [
                4
            ],
            "trashRetentionDays": [
                8
            ],
            "updatedAt": [
                223
            ],
            "viewFields": [
                674
            ],
            "viewFilterGroups": [
                677
            ],
            "viewFilters": [
                676
            ],
            "viewGroups": [
                680
            ],
            "viewSorts": [
                683
            ],
            "views": [
                671
            ],
            "workspaceCustomApplication": [
                54
            ],
            "workspaceCustomApplicationId": [
                4
            ],
            "workspaceDiscoverability": [
                701
            ],
            "workspaceMembersCount": [
                8
            ],
            "workspaceUrls": [
                713
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceActivationStatus": {},
        "WorkspaceAiStats": {
            "conversationsCount": [
                2
            ],
            "skillsCount": [
                2
            ],
            "toolsCount": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspaceCompanyEnrichmentResult": {
            "enrichment": [
                339
            ],
            "isBookCallOnboardingStepPending": [
                1
            ],
            "outcome": [
                698
            ],
            "personEnrichment": [
                339
            ],
            "personOutcome": [
                711
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                4
            ],
            "subdomain": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceInvitation": {
            "email": [
                4
            ],
            "expiresAt": [
                223
            ],
            "id": [
                559
            ],
            "roleId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMember": {
            "avatarUrl": [
                4
            ],
            "calendarStartDay": [
                2
            ],
            "colorScheme": [
                4
            ],
            "dateFormat": [
                706
            ],
            "id": [
                559
            ],
            "locale": [
                4
            ],
            "name": [
                302
            ],
            "numberFormat": [
                707
            ],
            "openRecordIn": [
                420
            ],
            "roles": [
                474
            ],
            "timeFormat": [
                708
            ],
            "timeZone": [
                4
            ],
            "uiScale": [
                4
            ],
            "userEmail": [
                4
            ],
            "userId": [
                559
            ],
            "userWorkspaceId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMemberApplicationVariables": {
            "userWorkspaceId": [
                559
            ],
            "variables": [
                660
            ],
            "workspaceMemberId": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMigration": {
            "actions": [
                339
            ],
            "applicationUniversalIdentifier": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                4
            ],
            "id": [
                559
            ],
            "__typename": [
                4
            ]
        },
        "WorkspacePersonEnrichmentOutcome": {},
        "WorkspaceSetupChatOutcome": {},
        "WorkspaceUrls": {
            "customUrl": [
                4
            ],
            "subdomainUrl": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "WorkspaceUrlsAndId": {
            "id": [
                559
            ],
            "workspaceUrls": [
                713
            ],
            "__typename": [
                4
            ]
        }
    }
}