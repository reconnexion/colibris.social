const { ActivityPubService, ACTOR_TYPES } = require('@semapps/activitypub');
const { getPrefixJSON, getSlugFromUri } = require('@semapps/ldp');
const CONFIG = require('../config');
const containers = require('../containers');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [ActivityPubService],
  settings: {
    baseUri: CONFIG.HOME_URL,
    additionalContext: getPrefixJSON(ontologies),
    queueServiceUrl: CONFIG.QUEUE_SERVICE_URL,
    containers,
    selectActorData: resource => {
      let resourceId = resource.id || resource['@id'],
        resourceTypes = resource.type || resource['@type'];
      resourceTypes = Array.isArray(resourceTypes) ? resourceTypes : [resourceTypes];
      if (resourceTypes.includes('foaf:Person')) {
        return {
          '@type': ACTOR_TYPES.PERSON,
          name: resource['foaf:name'] + ' ' + resource['foaf:familyName'],
          preferredUsername: getSlugFromUri(resourceId)
        };
      } else if (resourceTypes.includes('pair:Organization')) {
        return {
          '@type': ACTOR_TYPES.ORGANIZATION,
          name: resource['pair:label'],
          preferredUsername: getSlugFromUri(resourceId)
        };
      } else if (resourceTypes.includes('pair:Group')) {
        return {
          '@type': ACTOR_TYPES.GROUP,
          name: resource['pair:label'],
          preferredUsername: getSlugFromUri(resourceId)
        };
      } else if (resourceTypes.includes('pair:Project')) {
        return {
          '@type': ACTOR_TYPES.GROUP,
          name: resource['pair:label'],
          preferredUsername: getSlugFromUri(resourceId)
        };
      } else {
        throw new Error(`Unknown resource type: ${resourceTypes}`);
      }
    }
  }
};
