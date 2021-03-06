const { ACTOR_TYPES, OBJECT_TYPES } = require('@semapps/activitypub');

const localGroupsContainers = [
  {
    path: '/pages',
    acceptedTypes: ['semapps:Page']
  },
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/groups',
    acceptedTypes: ['pair:Group', ACTOR_TYPES.GROUP],
    dereference: ['sec:publicKey']
  },
  {
    path: '/projects',
    acceptedTypes: ['pair:Project', ACTOR_TYPES.GROUP],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
  },
  {
    path: '/events',
    acceptedTypes: 'pair:Event',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
  },
  {
    path: '/documents',
    acceptedTypes: ['pair:Document']
  },
  {
    path: '/notes',
    acceptedTypes: [OBJECT_TYPES.NOTE]
  },
];

const cods = {
  '/lafabrique': [
    {
      path: '/projects',
      acceptedTypes: ['pair:Project'],
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    },
    {
      path: '/hosting-services',
      acceptedTypes: ['oasis:HostingService']
    }
  ],
  '/presdecheznous': [
    {
      path: '/organizations',
      acceptedTypes: ['pair:Organization'],
      dereference: ['pair:hasLocation/pair:hasPostalAddress']
    }
  ],
  '/groupeslocaux': [
    {
      path: '/groups',
      acceptedTypes: ['pair:Group', ACTOR_TYPES.GROUP],
      dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
    }
  ],
  '/payscreillois': localGroupsContainers
};

const mapCodsToContainers = () => {
  let containers = [];
  Object.keys(cods).forEach(key => {
    // Parent container
    containers.push({ path: key });
    // Child containers
    containers.push(...cods[key].map(container => {
      container.path = key + container.path;
      return container;
    }));
  });
  return containers;
};

module.exports = [
  {
    path: '/'
  },
  ...mapCodsToContainers(),
  {
    path: '/services',
    acceptedTypes: ['pair:Group', ACTOR_TYPES.SERVICE],
    dereference: ['sec:publicKey']
  },
  {
    path: '/users',
    acceptedTypes: ['pair:Person', ACTOR_TYPES.PERSON],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/themes',
    acceptedTypes: ['pair:Theme']
  },
  {
    path: '/status',
    acceptedTypes: ['pair:ProjectStatus'],
  },
  {
    path: '/skills',
    acceptedTypes: ['pair:Skill']
  },
  {
    path: '/types',
    acceptedTypes: [
      'pair:ActivityType',
      'pair:AgentType',
      'pair:ConceptType',
      'pair:DocumentType',
      'pair:EventType',
      'pair:FolderType',
      'pair:GroupType',
      'pair:IdeaType',
      'pair:ObjectType',
      'pair:OrganizationType',
      'pair:PlaceType',
      'pair:ProjectType',
      'pair:ResourceType',
      'pair:SubjectType',
      'pair:TaskType',
      'oasis:HostingServiceType'
    ]
  },
  {
    path: '/files'
  }
];
