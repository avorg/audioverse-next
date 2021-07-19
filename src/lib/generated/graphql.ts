import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { graphqlFetcher } from '@lib/api/fetchApi';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date value string in YYYY-MM-DD format. Example value: "2020-10-05". */
  Date: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** A field whose value conforms to the standard URL format as specified in RF3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Attachment = Node & {
  __typename?: 'Attachment';
  /** Whether the current viewer may delete the file. */
  canDelete: Maybe<Scalars['Boolean']>;
  filename: Scalars['String'];
  /** In bytes */
  filesize: Scalars['String'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  recording: Recording;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['URL'];
};


export type AttachmentUrlArgs = {
  skipAnalytics: Maybe<Scalars['Boolean']>;
};

export type AudioFile = Node & {
  __typename?: 'AudioFile';
  /** Bitrate of the audio file in kbps. */
  bitrate: Scalars['Int'];
  /** Whether the current viewer may delete the file. */
  canDelete: Maybe<Scalars['Boolean']>;
  /** The duration of the audio file in seconds. */
  duration: Scalars['Float'];
  filename: Scalars['String'];
  /** In bytes */
  filesize: Scalars['String'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  recording: Recording;
  transcodingStatus: MediaFileTranscodingStatus;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['URL'];
};


export type AudioFileUrlArgs = {
  skipAnalytics: Maybe<Scalars['Boolean']>;
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  sessionToken: Scalars['String'];
  user: User;
};

export type AuthenticatedUserPayload = {
  __typename?: 'AuthenticatedUserPayload';
  authenticatedUser: Maybe<AuthenticatedUser>;
  errors: Array<InputValidationError>;
};

export type Bible = Node & {
  __typename?: 'Bible';
  book: BibleBook;
  books: Array<BibleBook>;
  copyrightText: Scalars['String'];
  id: Scalars['ID'];
  isDramatized: Scalars['Boolean'];
  sponsor: BibleSponsor;
  title: Scalars['String'];
};


export type BibleBookArgs = {
  id: Scalars['ID'];
};

export type BibleBook = Node & {
  __typename?: 'BibleBook';
  bible: Bible;
  chapter: BibleChapter;
  chapterCount: Scalars['Int'];
  chapters: Array<BibleChapter>;
  id: Scalars['ID'];
  isDramatized: Scalars['Boolean'];
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['String'];
  title: Scalars['String'];
};


export type BibleBookChapterArgs = {
  id: Scalars['ID'];
};

export type BibleChapter = Node & {
  __typename?: 'BibleChapter';
  book: BibleBook;
  id: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['URL'];
  verseCount: Scalars['Int'];
  verses: Array<BibleVerse>;
};

export type BibleConnection = {
  __typename?: 'BibleConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<BibleEdge>>;
  nodes: Maybe<Array<Bible>>;
  pageInfo: PageInfo;
};

export type BibleEdge = {
  __typename?: 'BibleEdge';
  cursor: Scalars['String'];
  node: Bible;
};

export type BibleReference = {
  __typename?: 'BibleReference';
  book: BibleReferenceBook;
  chapter: Maybe<Scalars['Int']>;
  verse: Maybe<Scalars['Int']>;
};

export enum BibleReferenceBook {
  Acts = 'ACTS',
  Amos = 'AMOS',
  Colossians = 'COLOSSIANS',
  Daniel = 'DANIEL',
  Deuteronomy = 'DEUTERONOMY',
  Ecclesiastes = 'ECCLESIASTES',
  Ephesians = 'EPHESIANS',
  Esther = 'ESTHER',
  Exodus = 'EXODUS',
  Ezekiel = 'EZEKIEL',
  Ezra = 'EZRA',
  FirstChronicles = 'FIRST_CHRONICLES',
  FirstCorinthians = 'FIRST_CORINTHIANS',
  FirstJohn = 'FIRST_JOHN',
  FirstKings = 'FIRST_KINGS',
  FirstPeter = 'FIRST_PETER',
  FirstSamuel = 'FIRST_SAMUEL',
  FirstThessalonians = 'FIRST_THESSALONIANS',
  FirstTimothy = 'FIRST_TIMOTHY',
  Galatians = 'GALATIANS',
  Genesis = 'GENESIS',
  Habakkuk = 'HABAKKUK',
  Haggai = 'HAGGAI',
  Hebrews = 'HEBREWS',
  Hosea = 'HOSEA',
  Isaiah = 'ISAIAH',
  James = 'JAMES',
  Jeremiah = 'JEREMIAH',
  Job = 'JOB',
  Joel = 'JOEL',
  John = 'JOHN',
  Jonah = 'JONAH',
  Joshua = 'JOSHUA',
  Jude = 'JUDE',
  Judges = 'JUDGES',
  Lamentations = 'LAMENTATIONS',
  Leviticus = 'LEVITICUS',
  Luke = 'LUKE',
  Malachi = 'MALACHI',
  Mark = 'MARK',
  Matthew = 'MATTHEW',
  Micah = 'MICAH',
  Nahum = 'NAHUM',
  Nehemiah = 'NEHEMIAH',
  Numbers = 'NUMBERS',
  Obadiah = 'OBADIAH',
  Philemon = 'PHILEMON',
  Philippians = 'PHILIPPIANS',
  Proverbs = 'PROVERBS',
  Psalms = 'PSALMS',
  Revelation = 'REVELATION',
  Romans = 'ROMANS',
  Ruth = 'RUTH',
  SecondChronicles = 'SECOND_CHRONICLES',
  SecondCorinthians = 'SECOND_CORINTHIANS',
  SecondJohn = 'SECOND_JOHN',
  SecondKings = 'SECOND_KINGS',
  SecondPeter = 'SECOND_PETER',
  SecondSamuel = 'SECOND_SAMUEL',
  SecondThessalonians = 'SECOND_THESSALONIANS',
  SecondTimothy = 'SECOND_TIMOTHY',
  SongOfSolomon = 'SONG_OF_SOLOMON',
  ThirdJohn = 'THIRD_JOHN',
  Titus = 'TITUS',
  Zechariah = 'ZECHARIAH',
  Zephaniah = 'ZEPHANIAH'
}

/** A Bible reference. */
export type BibleReferenceInput = {
  book: BibleReferenceBook;
  chapter: Maybe<Scalars['Int']>;
  verse: Maybe<Scalars['Int']>;
};

/** The Bible reference range applicable to an item. */
export type BibleReferenceRange = Node & {
  __typename?: 'BibleReferenceRange';
  /** The end reference. */
  endReference: BibleReference;
  id: Scalars['ID'];
  /** The start reference. */
  startReference: BibleReference;
};

export type BibleReferenceRangeConnection = {
  __typename?: 'BibleReferenceRangeConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<BibleReferenceRangeEdge>>;
  nodes: Maybe<Array<BibleReferenceRange>>;
  pageInfo: PageInfo;
};

export type BibleReferenceRangeEdge = {
  __typename?: 'BibleReferenceRangeEdge';
  cursor: Scalars['String'];
  node: BibleReferenceRange;
};

/** The Bible reference range the items must fall in to be applicable. */
export type BibleReferenceRangeInput = {
  /** The end reference. */
  endReference: Maybe<BibleReferenceInput>;
  /** The start reference. */
  startReference: BibleReferenceInput;
};

export type BibleSponsor = {
  __typename?: 'BibleSponsor';
  name: Scalars['String'];
  url: Scalars['URL'];
};

export type BibleVerse = {
  __typename?: 'BibleVerse';
  number: Scalars['Int'];
  text: Scalars['String'];
};

export type BlogPost = Node & UniformResourceLocatable & {
  __typename?: 'BlogPost';
  body: Scalars['String'];
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  /** The number of days to feature blog post. */
  featuredDuration: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  publishDate: Scalars['DateTime'];
  /** The estimated number of seconds to read the blog post. */
  readingDuration: Maybe<Scalars['Float']>;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  teaser: Scalars['String'];
  title: Scalars['String'];
};

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<BlogPostEdge>>;
  nodes: Maybe<Array<BlogPost>>;
  pageInfo: PageInfo;
};

export type BlogPostCreateInput = {
  body: Scalars['String'];
  /** The number of days to feature blog post. */
  featuredDuration: Maybe<Scalars['Int']>;
  image: Maybe<ImageInput>;
  language: Language;
  publishDate: Maybe<Scalars['DateTime']>;
  teaser: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type BlogPostEdge = {
  __typename?: 'BlogPostEdge';
  cursor: Scalars['String'];
  node: BlogPost;
};

export type BlogPostOrder = {
  direction: OrderByDirection;
  field: BlogPostSortableField;
};

export type BlogPostPayload = {
  __typename?: 'BlogPostPayload';
  blogPost: Maybe<BlogPost>;
  errors: Array<InputValidationError>;
};

/** Properties by which blog post connections can be ordered. */
export enum BlogPostSortableField {
  PublishedAt = 'PUBLISHED_AT'
}

export type BlogPostUpdateInput = {
  body: Maybe<Scalars['String']>;
  /** The number of days to feature blog post. */
  featuredDuration: Maybe<Scalars['Int']>;
  image: Maybe<ImageInput>;
  publishDate: Maybe<Scalars['DateTime']>;
  teaser: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

/** The types of catalog entities. */
export enum CatalogEntityType {
  Collection = 'COLLECTION',
  DistributionAgreement = 'DISTRIBUTION_AGREEMENT',
  License = 'LICENSE',
  Person = 'PERSON',
  Recording = 'RECORDING',
  Sequence = 'SEQUENCE',
  Sponsor = 'SPONSOR'
}

export type CatalogHistoryComment = {
  __typename?: 'CatalogHistoryComment';
  isSticky: Scalars['Boolean'];
  mentions: Array<User>;
  /** Includes mentions in the format of @user:[id] (e.g., `@user:123`). */
  message: Scalars['String'];
};

export type CatalogHistoryCommentCreateInput = {
  isSticky: Maybe<Scalars['Boolean']>;
  /** Can include mentions in the format of @user:[id] (e.g., `@user:123`). */
  message: Scalars['String'];
};

export type CatalogHistoryCommentUpdateInput = {
  isSticky: Maybe<Scalars['Boolean']>;
  /** Can include mentions in the format of @user:[id] (e.g., `@user:123`). */
  message: Scalars['String'];
};

export type CatalogHistoryEntityUnion = Collection | DistributionAgreement | License | MediaRelease | Person | Recording | Sequence | Sponsor;

export type CatalogHistoryItem = Node & {
  __typename?: 'CatalogHistoryItem';
  comment: Maybe<CatalogHistoryComment>;
  createdAt: Scalars['DateTime'];
  entity: Maybe<CatalogHistoryEntityUnion>;
  id: Scalars['ID'];
  performer: Maybe<User>;
  type: CatalogHistoryItemType;
};

export type CatalogHistoryItemConnection = {
  __typename?: 'CatalogHistoryItemConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<CatalogHistoryItemEdge>>;
  nodes: Maybe<Array<CatalogHistoryItem>>;
  pageInfo: PageInfo;
};

export type CatalogHistoryItemEdge = {
  __typename?: 'CatalogHistoryItemEdge';
  cursor: Scalars['String'];
  node: CatalogHistoryItem;
};

export type CatalogHistoryItemOrder = {
  direction: OrderByDirection;
  field: CatalogHistoryItemSortableField;
};

export type CatalogHistoryItemPayload = {
  __typename?: 'CatalogHistoryItemPayload';
  catalogHistoryItem: Maybe<CatalogHistoryItem>;
  errors: Array<InputValidationError>;
};

/** Properties by which history item connections can be ordered. */
export enum CatalogHistoryItemSortableField {
  CreatedAt = 'CREATED_AT'
}

/** The supported types of catalog history items. */
export enum CatalogHistoryItemType {
  Archive = 'ARCHIVE',
  CheckoutContent = 'CHECKOUT_CONTENT',
  CheckoutLegal = 'CHECKOUT_LEGAL',
  CheckoutTechnical = 'CHECKOUT_TECHNICAL',
  Created = 'CREATED',
  Deleted = 'DELETED',
  EncodingError = 'ENCODING_ERROR',
  FileUploaded = 'FILE_UPLOADED',
  Hidden = 'HIDDEN',
  InternalComment = 'INTERNAL_COMMENT',
  MediaReleaseSubmit = 'MEDIA_RELEASE_SUBMIT',
  RecordingScreeningCleared = 'RECORDING_SCREENING_CLEARED',
  ScreeningContentAvailable = 'SCREENING_CONTENT_AVAILABLE',
  ScreeningContentFlag = 'SCREENING_CONTENT_FLAG',
  ScreeningLegalAvailable = 'SCREENING_LEGAL_AVAILABLE',
  ScreeningLegalFlag = 'SCREENING_LEGAL_FLAG',
  ScreeningTechnicalAvailable = 'SCREENING_TECHNICAL_AVAILABLE',
  ScreeningTechnicalFlag = 'SCREENING_TECHNICAL_FLAG',
  SystemError = 'SYSTEM_ERROR',
  Unarchive = 'UNARCHIVE',
  Updated = 'UPDATED'
}

/** The supported view filter of catalog history items. */
export enum CatalogHistoryItemViewFilter {
  Comments = 'COMMENTS',
  Logs = 'LOGS',
  Mentions = 'MENTIONS'
}

export type Collection = Node & UniformResourceLocatable & {
  __typename?: 'Collection';
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  contentType: CollectionContentType;
  description: Scalars['String'];
  /** The combined duration of the collection's recordings in seconds. */
  duration: Scalars['Float'];
  endDate: Maybe<Scalars['Date']>;
  hidingReason: Maybe<Scalars['String']>;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  imageWithFallback: Image;
  isHidden: Maybe<Scalars['Boolean']>;
  location: Maybe<Scalars['String']>;
  /** @deprecated Collection.logoImage is replaced with Collection.image */
  logoImage: Maybe<Image>;
  /** @deprecated Collection.logoImageWithFallback is replaced with Collection.imageWithFallback */
  logoImageWithFallback: Image;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
  persons: PersonConnection;
  recordings: RecordingConnection;
  sequences: SequenceConnection;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsor: Maybe<Sponsor>;
  startDate: Maybe<Scalars['Date']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  viewerHasFavorited: Scalars['Boolean'];
  /** The percentage of the associated recordings the viewer has finished playing. */
  viewerPlaybackCompletedPercentage: Scalars['Float'];
};


export type CollectionHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type CollectionPersonsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<PersonsOrder>>;
  role: Maybe<PersonsRoleField>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
};


export type CollectionRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type CollectionSequencesArgs = {
  after: Maybe<Scalars['String']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<CollectionEdge>>;
  nodes: Maybe<Array<Collection>>;
  pageInfo: PageInfo;
};

/** The available types of collections. */
export enum CollectionContentType {
  AudiobookSeries = 'AUDIOBOOK_SERIES',
  Conference = 'CONFERENCE',
  MusicSeries = 'MUSIC_SERIES',
  StoryProgram = 'STORY_PROGRAM'
}

export type CollectionCreateInput = {
  contentType: CollectionContentType;
  description: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  location: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Scalars['ID'];
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String'];
  node: Collection;
};

export type CollectionPayload = {
  __typename?: 'CollectionPayload';
  collection: Maybe<Collection>;
  errors: Array<InputValidationError>;
};

export type CollectionUpdateInput = {
  description: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  location: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Maybe<Scalars['ID']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CollectionsOrder = {
  direction: OrderByDirection;
  field: CollectionsSortableField;
};

/** Properties by which collection connections can be ordered. */
export enum CollectionsSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  RecordingPublishedAt = 'RECORDING_PUBLISHED_AT',
  Title = 'TITLE'
}


/** The date range the items must fall in to be applicable. */
export type DateRangeInput = {
  /** The lower bound of the date range. */
  greaterThan: Maybe<Scalars['Date']>;
  /** The lower or equal bound of the date range. */
  greaterThanOrEqualTo: Maybe<Scalars['Date']>;
  /** The upper bound of the date range. */
  lessThan: Maybe<Scalars['Date']>;
  /** The upper or equal bound of the date range. */
  lessThanOrEqualTo: Maybe<Scalars['Date']>;
};


export type DistributionAgreement = Node & {
  __typename?: 'DistributionAgreement';
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  isHidden: Maybe<Scalars['Boolean']>;
  isRetired: Scalars['Boolean'];
  license: Maybe<License>;
  recordings: RecordingConnection;
  sponsor: Maybe<Sponsor>;
  summary: Scalars['String'];
  title: Scalars['String'];
};


export type DistributionAgreementHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type DistributionAgreementRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type DistributionAgreementConnection = {
  __typename?: 'DistributionAgreementConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<DistributionAgreementEdge>>;
  nodes: Maybe<Array<DistributionAgreement>>;
  pageInfo: PageInfo;
};

export type DistributionAgreementCreateInput = {
  isDefault: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  licenseId: Scalars['ID'];
  sponsorId: Scalars['ID'];
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type DistributionAgreementEdge = {
  __typename?: 'DistributionAgreementEdge';
  cursor: Scalars['String'];
  node: DistributionAgreement;
};

export type DistributionAgreementPayload = {
  __typename?: 'DistributionAgreementPayload';
  distributionAgreement: Maybe<DistributionAgreement>;
  errors: Array<InputValidationError>;
};

export type DistributionAgreementUpdateInput = {
  isDefault: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  licenseId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type DistributionAgreementsOrder = {
  direction: OrderByDirection;
  field: DistributionAgreementsSortableField;
};

/** Properties by which distribution agreement connections can be ordered. */
export enum DistributionAgreementsSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Title = 'TITLE'
}

export type Faq = Node & {
  __typename?: 'Faq';
  body: Scalars['String'];
  faqCategory: FaqCategory;
  id: Scalars['ID'];
  /** The index of the FAQ within its category. */
  index: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  publishDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type FaqCategory = Node & {
  __typename?: 'FaqCategory';
  id: Scalars['ID'];
  /** The index of the category within all categories. */
  index: Scalars['Int'];
  title: Scalars['String'];
};

export type FaqCategoryConnection = {
  __typename?: 'FaqCategoryConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<FaqCategoryEdge>>;
  nodes: Maybe<Array<FaqCategory>>;
  pageInfo: PageInfo;
};

export type FaqCategoryEdge = {
  __typename?: 'FaqCategoryEdge';
  cursor: Scalars['String'];
  node: FaqCategory;
};

export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<FaqEdge>>;
  nodes: Maybe<Array<Faq>>;
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  body: Scalars['String'];
  faqCategoryId: Scalars['ID'];
  /** The index of the FAQ within its category. */
  index: Scalars['Int'];
  isHidden: Maybe<Scalars['Boolean']>;
  language: Language;
  publishDate: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type FaqEdge = {
  __typename?: 'FaqEdge';
  cursor: Scalars['String'];
  node: Faq;
};

export type FaqPayload = {
  __typename?: 'FaqPayload';
  errors: Array<InputValidationError>;
  faq: Maybe<Faq>;
};

export type FaqUpdateInput = {
  body: Maybe<Scalars['String']>;
  faqCategoryId: Maybe<Scalars['ID']>;
  /** The index of the FAQ within its category. */
  index: Maybe<Scalars['Int']>;
  isHidden: Maybe<Scalars['Boolean']>;
  publishDate: Maybe<Scalars['DateTime']>;
  title: Maybe<Scalars['String']>;
};

export type FaqsOrder = {
  direction: OrderByDirection;
  field: FaqsSortableField;
};

/** Properties by which FAQ connections can be ordered. */
export enum FaqsSortableField {
  CreatedAt = 'CREATED_AT',
  Index = 'INDEX',
  Title = 'TITLE'
}

/** The types of catalog entities that may be favorited. */
export enum FavoritableCatalogEntityType {
  Collection = 'COLLECTION',
  Person = 'PERSON',
  Recording = 'RECORDING',
  Sequence = 'SEQUENCE',
  Sponsor = 'SPONSOR'
}

export type FavoriteEntityUnion = Collection | Person | Recording | Sequence | Sponsor;

export type FavoritesOrder = {
  direction: OrderByDirection;
  field: FavoritesSortableField;
};

/** Properties by which user favorites connections can be ordered. */
export enum FavoritesSortableField {
  FavoritedAt = 'FAVORITED_AT'
}

export type Image = {
  __typename?: 'Image';
  name: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['URL'];
};


export type ImageUrlArgs = {
  cropMode?: Maybe<ImageCropMode>;
  size: Scalars['Int'];
  skipCache: Maybe<Scalars['Boolean']>;
};

/** The underlying API doesn't support offset-based pagination or count requests. As a result this connection doesn't include `pageInfo` or `aggregate` fields. */
export type ImageConnectionSlim = {
  __typename?: 'ImageConnectionSlim';
  edges: Maybe<Array<ImageEdge>>;
};

/** The available image type containers. */
export enum ImageContainer {
  Avatar = 'AVATAR',
  Collection = 'COLLECTION',
  License = 'LICENSE',
  News = 'NEWS',
  Person = 'PERSON',
  Sequence = 'SEQUENCE',
  Site = 'SITE',
  Sponsor = 'SPONSOR'
}

/** Aavailable crop modes for images. */
export enum ImageCropMode {
  /** Resizes the image to the requested size and in the process crops parts from the original image. */
  Default = 'DEFAULT',
  /** Scales the whole image content (no cropping) at the original aspect ratio to fit within the output size. */
  MaxSize = 'MAX_SIZE'
}

export type ImageEdge = {
  __typename?: 'ImageEdge';
  cursor: Scalars['String'];
  node: Image;
};

export type ImageInput = {
  name: Scalars['String'];
};

export type ImagePayload = {
  __typename?: 'ImagePayload';
  errors: Array<InputValidationError>;
  image: Maybe<Image>;
};

export type InputValidationError = {
  __typename?: 'InputValidationError';
  message: Scalars['String'];
};

export type InternalContact = {
  __typename?: 'InternalContact';
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type InternalContactInput = {
  address: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
};

/** Supported languages */
export enum Language {
  Chinese = 'CHINESE',
  English = 'ENGLISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Japanese = 'JAPANESE',
  Russian = 'RUSSIAN',
  Spanish = 'SPANISH'
}

export type License = Node & {
  __typename?: 'License';
  description: Scalars['String'];
  distributionAgreements: DistributionAgreementConnection;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  isDefault: Scalars['Boolean'];
  isHidden: Maybe<Scalars['Boolean']>;
  permitsSales: Maybe<Scalars['Boolean']>;
  summary: Scalars['String'];
  title: Scalars['String'];
};


export type LicenseDistributionAgreementsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  isDefault: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<DistributionAgreementsOrder>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type LicenseHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};

export type LicenseConnection = {
  __typename?: 'LicenseConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<LicenseEdge>>;
  nodes: Maybe<Array<License>>;
  pageInfo: PageInfo;
};

export type LicenseCreateInput = {
  description: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isDefault: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  language: Language;
  permitsSales: Maybe<Scalars['Boolean']>;
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  cursor: Scalars['String'];
  node: License;
};

export type LicensePayload = {
  __typename?: 'LicensePayload';
  errors: Array<InputValidationError>;
  license: Maybe<License>;
};

export type LicenseUpdateInput = {
  description: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isDefault: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  permitsSales: Maybe<Scalars['Boolean']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type LicensesOrder = {
  direction: OrderByDirection;
  field: LicensesSortableField;
};

/** Properties by which license connections can be ordered. */
export enum LicensesSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Title = 'TITLE'
}

/** The media file container types. */
export enum MediaFileContainer {
  Doc = 'DOC',
  Docx = 'DOCX',
  Flv = 'FLV',
  Jpg = 'JPG',
  Key = 'KEY',
  M3U8Ios = 'M3U8_IOS',
  M3U8Web = 'M3U8_WEB',
  M4A = 'M4A',
  M4V = 'M4V',
  Mov = 'MOV',
  Mp3 = 'MP3',
  Mp4 = 'MP4',
  Odp = 'ODP',
  Odt = 'ODT',
  Pages = 'PAGES',
  Pdf = 'PDF',
  Png = 'PNG',
  Ppt = 'PPT',
  Pptx = 'PPTX',
  Wav = 'WAV',
  Wma = 'WMA',
  Wmv = 'WMV'
}

export type MediaFileResult = Attachment | AudioFile | VideoFile;

export type MediaFileResultConnection = {
  __typename?: 'MediaFileResultConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<MediaFileResultEdge>>;
  nodes: Maybe<Array<MediaFileResult>>;
  pageInfo: PageInfo;
};

export type MediaFileResultEdge = {
  __typename?: 'MediaFileResultEdge';
  cursor: Scalars['String'];
  node: MediaFileResult;
};

/** The transcoding status of a media file upload. */
export enum MediaFileTranscodingStatus {
  /** Transcoding completed. */
  Complete = 'COMPLETE',
  /** Transcoding failed. */
  Failed = 'FAILED',
  /** Transcoding in process. */
  Processing = 'PROCESSING',
  /** Waiting for transcoding slot. */
  Queued = 'QUEUED',
  /** Not Yet Begun */
  Unstarted = 'UNSTARTED'
}

export type MediaFileUpload = Node & {
  __typename?: 'MediaFileUpload';
  /** Whether the current viewer may delete the file. */
  canDelete: Maybe<Scalars['Boolean']>;
  filename: Scalars['String'];
  /** In bytes */
  filesize: Scalars['String'];
  hasUploaded: Scalars['Boolean'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  /** The presigned part upload URLs. Unavailable after the upload has completed. */
  partUploadUrls: Maybe<Array<Scalars['String']>>;
  recording: Maybe<Recording>;
  transcodingStatus: MediaFileTranscodingStatus;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Maybe<Scalars['URL']>;
};


export type MediaFileUploadPartUploadUrlsArgs = {
  count: Scalars['Int'];
};

export type MediaFileUploadConnection = {
  __typename?: 'MediaFileUploadConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<MediaFileUploadEdge>>;
  nodes: Maybe<Array<MediaFileUpload>>;
  pageInfo: PageInfo;
};

export type MediaFileUploadEdge = {
  __typename?: 'MediaFileUploadEdge';
  cursor: Scalars['String'];
  node: MediaFileUpload;
};

export type MediaFileUploadFinishInput = {
  /** The list of entity tags returned from the part upload API calls. */
  uploadPartEtags: Array<Scalars['String']>;
};

export type MediaFileUploadPayload = {
  __typename?: 'MediaFileUploadPayload';
  errors: Array<InputValidationError>;
  mediaFileUpload: Maybe<MediaFileUpload>;
};

export type MediaFileUploadStartInput = {
  filename: Scalars['String'];
  filesize: Scalars['String'];
  recordingId: Maybe<Scalars['ID']>;
};

export type MediaFileUploadsOrder = {
  direction: OrderByDirection;
  field: MediaFileUploadsSortableField;
};

/** Properties by which media file uploads connections can be ordered. */
export enum MediaFileUploadsSortableField {
  CreatedAt = 'CREATED_AT',
  Filename = 'FILENAME'
}

export type MediaFilesOrder = {
  direction: OrderByDirection;
  field: MediaFilesSortableField;
};

/** Properties by which media files connections can be ordered. */
export enum MediaFilesSortableField {
  CreatedAt = 'CREATED_AT',
  Filename = 'FILENAME',
  Filesize = 'FILESIZE'
}

export type MediaRelease = Node & {
  __typename?: 'MediaRelease';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mediaReleaseForm: MediaReleaseForm;
  /** The personal information collected with the media release. */
  mediaReleasePerson: MediaReleasePerson;
  notes: Maybe<Scalars['String']>;
  /** The catalog person associated with the media release. */
  person: Maybe<Person>;
};

export type MediaReleaseConnection = {
  __typename?: 'MediaReleaseConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<MediaReleaseEdge>>;
  nodes: Maybe<Array<MediaRelease>>;
  pageInfo: PageInfo;
};

export type MediaReleaseCreateInput = {
  mediaReleaseFormId: Scalars['ID'];
  /** The personal information collected with the media release. */
  mediaReleasePerson: MediaReleasePersonCreateInput;
  notes: Maybe<Scalars['String']>;
  /** The catalog person associated with the media release. */
  personId: Maybe<Scalars['ID']>;
};

export type MediaReleaseEdge = {
  __typename?: 'MediaReleaseEdge';
  cursor: Scalars['String'];
  node: MediaRelease;
};

export type MediaReleaseForm = Node & {
  __typename?: 'MediaReleaseForm';
  collection: Maybe<Collection>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isClosed: Scalars['Boolean'];
  mediaReleases: MediaReleaseConnection;
  recording: Maybe<Recording>;
  sequence: Maybe<Sequence>;
  sponsor: Maybe<Sponsor>;
  summary: Scalars['String'];
  title: Scalars['String'];
  type: MediaReleaseFormType;
  /** The URL for media release form. */
  url: Maybe<Scalars['URL']>;
};


export type MediaReleaseFormMediaReleasesArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<MediaReleaseOrder>>;
  personId: Maybe<Scalars['ID']>;
  recordingId: Maybe<Scalars['ID']>;
  search: Maybe<Scalars['String']>;
  seriesId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};

export type MediaReleaseFormConnection = {
  __typename?: 'MediaReleaseFormConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<MediaReleaseFormEdge>>;
  nodes: Maybe<Array<MediaReleaseForm>>;
  pageInfo: PageInfo;
};

export type MediaReleaseFormCreateInput = {
  /** Required if `type` is `COLLECTION`. */
  collectionId: Maybe<Scalars['ID']>;
  isClosed: Maybe<Scalars['Boolean']>;
  language: Language;
  /** Required if `type` is `RECORDING`. */
  recordingId: Maybe<Scalars['ID']>;
  /** Required if `type` is `SEQUENCE`. */
  sequenceId: Maybe<Scalars['ID']>;
  /** Required if `type` is `SPONSOR`. */
  sponsorId: Maybe<Scalars['ID']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  type: MediaReleaseFormType;
};

export type MediaReleaseFormEdge = {
  __typename?: 'MediaReleaseFormEdge';
  cursor: Scalars['String'];
  node: MediaReleaseForm;
};

/** Content types of the media release form entities with content types. */
export enum MediaReleaseFormEntityContentType {
  Audiobook = 'AUDIOBOOK',
  AudiobookSeries = 'AUDIOBOOK_SERIES',
  AudiobookTrack = 'AUDIOBOOK_TRACK',
  Conference = 'CONFERENCE',
  MusicAlbum = 'MUSIC_ALBUM',
  MusicSeries = 'MUSIC_SERIES',
  MusicTrack = 'MUSIC_TRACK',
  Series = 'SERIES',
  Sermon = 'SERMON',
  Story = 'STORY',
  StoryProgram = 'STORY_PROGRAM',
  StorySeason = 'STORY_SEASON'
}

export type MediaReleaseFormOrder = {
  direction: OrderByDirection;
  field: MediaReleaseFormSortableField;
};

export type MediaReleaseFormPayload = {
  __typename?: 'MediaReleaseFormPayload';
  errors: Array<InputValidationError>;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
};

/** Properties by which media release form connections can be ordered. */
export enum MediaReleaseFormSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Title = 'TITLE',
  Type = 'TYPE'
}

export type MediaReleaseFormTemplate = {
  __typename?: 'MediaReleaseFormTemplate';
  summary: Scalars['String'];
  title: Scalars['String'];
  type: MediaReleaseFormType;
};

/** Supported types of media release forms. */
export enum MediaReleaseFormType {
  Collection = 'COLLECTION',
  Master = 'MASTER',
  Recording = 'RECORDING',
  Sequence = 'SEQUENCE',
  Sponsor = 'SPONSOR'
}

export type MediaReleaseFormUpdateInput = {
  /** Required if `type` is `COLLECTION`. */
  collectionId: Maybe<Scalars['ID']>;
  isClosed: Maybe<Scalars['Boolean']>;
  /** Required if `type` is `RECORDING`. */
  recordingId: Maybe<Scalars['ID']>;
  /** Required if `type` is `SEQUENCE`. */
  sequenceId: Maybe<Scalars['ID']>;
  /** Required if `type` is `SPONSOR`. */
  sponsorId: Maybe<Scalars['ID']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  type: Maybe<MediaReleaseFormType>;
};

export type MediaReleaseOrder = {
  direction: OrderByDirection;
  field: MediaReleaseSortableField;
};

export type MediaReleasePayload = {
  __typename?: 'MediaReleasePayload';
  errors: Array<InputValidationError>;
  mediaRelease: Maybe<MediaRelease>;
};

export type MediaReleasePerson = {
  __typename?: 'MediaReleasePerson';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city: Maybe<Scalars['String']>;
  /** The name of the country. */
  country: Maybe<Scalars['String']>;
  /** The person's email address. */
  email: Scalars['String'];
  /** The person's first name. */
  givenName: Scalars['String'];
  /** The full name of the person, based on the values for givenName and surname. */
  name: Scalars['String'];
  /** The person's phone number. */
  phone: Scalars['String'];
  /** The postal or zip code. */
  postalCode: Maybe<Scalars['String']>;
  /** The name of the region, such as the province, state, or district. */
  province: Maybe<Scalars['String']>;
  /** The person's last name. */
  surname: Scalars['String'];
};

export type MediaReleasePersonCreateInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Scalars['String'];
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city: Scalars['String'];
  /** The name of the country. */
  country: Scalars['String'];
  /** The person's email address. */
  email: Scalars['String'];
  /** The person's first name. */
  givenName: Scalars['String'];
  /** The person's phone number. */
  phone: Scalars['String'];
  /** The postal or zip code. */
  postalCode: Scalars['String'];
  /** The name of the region, such as the province, state, or district. */
  province: Scalars['String'];
  /** The person's last name. */
  surname: Scalars['String'];
};

export type MediaReleasePersonUpdateInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** The name of the city, district, village, or town. */
  city: Maybe<Scalars['String']>;
  /** The name of the country. */
  country: Maybe<Scalars['String']>;
  /** The person's email address. */
  email: Maybe<Scalars['String']>;
  /** The person's first name. */
  givenName: Maybe<Scalars['String']>;
  /** The person's phone number. */
  phone: Maybe<Scalars['String']>;
  /** The postal or zip code. */
  postalCode: Maybe<Scalars['String']>;
  /** The name of the region, such as the province, state, or district. */
  province: Maybe<Scalars['String']>;
  /** The person's last name. */
  surname: Maybe<Scalars['String']>;
};

/** Properties by which media release connections can be ordered. */
export enum MediaReleaseSortableField {
  CreatedAt = 'CREATED_AT',
  GivenName = 'GIVEN_NAME',
  Id = 'ID',
  Surname = 'SURNAME'
}

export type MediaReleaseUpdateInput = {
  /** The personal information collected with the media release. */
  mediaReleasePerson: Maybe<MediaReleasePersonUpdateInput>;
  notes: Maybe<Scalars['String']>;
  /** The catalog person associated with the media release. */
  personId: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  blogPostCreate: BlogPostPayload;
  blogPostDelete: SuccessPayload;
  blogPostUpdate: BlogPostPayload;
  catalogHistoryCommentDelete: SuccessPayload;
  catalogHistoryCommentUpdate: CatalogHistoryItemPayload;
  collectionCreate: CollectionPayload;
  collectionDelete: SuccessPayload;
  collectionFavorite: SuccessPayload;
  collectionHistoryCommentCreate: CatalogHistoryItemPayload;
  /** Approve all recordings in collection through legal screening. */
  collectionScreeningLegalOverride: SuccessPayload;
  collectionUnfavorite: SuccessPayload;
  collectionUpdate: CollectionPayload;
  distributionAgreementCreate: DistributionAgreementPayload;
  distributionAgreementDelete: SuccessPayload;
  distributionAgreementHistoryCommentCreate: CatalogHistoryItemPayload;
  distributionAgreementUpdate: DistributionAgreementPayload;
  faqCreate: FaqPayload;
  faqDelete: SuccessPayload;
  faqUpdate: FaqPayload;
  /** @deprecated favoriteRecording is replaced with recordingFavorite */
  favoriteRecording: Scalars['Boolean'];
  /** Upload an image to an image type container. */
  imageUpload: ImagePayload;
  licenseCreate: LicensePayload;
  licenseDelete: SuccessPayload;
  licenseHistoryCommentCreate: CatalogHistoryItemPayload;
  licenseUpdate: LicensePayload;
  login: AuthenticatedUserPayload;
  loginSocial: AuthenticatedUserPayload;
  mediaFileDelete: SuccessPayload;
  mediaFileUploadAbort: SuccessPayload;
  mediaFileUploadAssign: SuccessPayload;
  mediaFileUploadFinish: MediaFileUploadPayload;
  mediaFileUploadStart: MediaFileUploadPayload;
  mediaReleaseCreate: MediaReleasePayload;
  mediaReleaseDelete: SuccessPayload;
  mediaReleaseFormCreate: MediaReleaseFormPayload;
  mediaReleaseFormDelete: SuccessPayload;
  mediaReleaseFormTemplateUpdate: SuccessPayload;
  mediaReleaseFormUpdate: MediaReleaseFormPayload;
  mediaReleaseUpdate: MediaReleasePayload;
  pageCreate: PagePayload;
  pageDelete: SuccessPayload;
  pageUpdate: PagePayload;
  personCreate: PersonPayload;
  personDelete: SuccessPayload;
  personFavorite: SuccessPayload;
  personHistoryCommentCreate: CatalogHistoryItemPayload;
  personUnfavorite: SuccessPayload;
  personUpdate: PersonPayload;
  playlistAdd: UserPlaylist;
  playlistDelete: Scalars['Boolean'];
  playlistRecordingAdd: Scalars['Boolean'];
  playlistRecordingRemove: Scalars['Boolean'];
  playlistUpdate: UserPlaylist;
  recordingArchive: SuccessPayload;
  recordingCreate: RecordingPayload;
  recordingDelete: SuccessPayload;
  /** Advances a recording from or withdraws a recording to draft stage. */
  recordingDrafting: RecordingPayload;
  recordingFavorite: SuccessPayload;
  recordingHistoryCommentCreate: CatalogHistoryItemPayload;
  recordingPlaybackSessionAdvance: RecordingPayload;
  recordingPlaybackSessionBegin: RecordingPayload;
  recordingPlaybackSessionFinish: RecordingPayload;
  recordingScreeningContentCheckoutCreate: RecordingScreeningCheckoutPayload;
  recordingScreeningContentCheckoutDelete: SuccessPayload;
  recordingScreeningContentEvaluate: RecordingPayload;
  /** Sets the methods used in evaluating the recording. */
  recordingScreeningContentMethodsSet: RecordingContentScreeningEvaluationPayload;
  recordingScreeningIssueCreate: RecordingScreeningIssuePayload;
  recordingScreeningIssueDelete: SuccessPayload;
  recordingScreeningIssueUpdate: RecordingScreeningIssuePayload;
  recordingScreeningLegalCheckoutCreate: RecordingScreeningCheckoutPayload;
  recordingScreeningLegalCheckoutDelete: SuccessPayload;
  recordingScreeningLegalEvaluate: RecordingPayload;
  recordingScreeningTechnicalCheckoutCreate: RecordingScreeningCheckoutPayload;
  recordingScreeningTechnicalCheckoutDelete: SuccessPayload;
  recordingScreeningTechnicalEvaluate: RecordingPayload;
  /** Deletes a recording's transcript, if extant. */
  recordingTranscriptDelete: SuccessPayload;
  /** Update a recording's transcript. */
  recordingTranscriptUpdate: RecordingPayload;
  /** Requests a recording be enqueued for automated transcription. */
  recordingTranscriptionRequest: SuccessPayload;
  recordingUnarchive: SuccessPayload;
  recordingUnfavorite: SuccessPayload;
  recordingUpdate: RecordingPayload;
  sequenceCreate: SequencePayload;
  sequenceDelete: SuccessPayload;
  sequenceFavorite: SuccessPayload;
  sequenceHistoryCommentCreate: CatalogHistoryItemPayload;
  /** Approve all recordings in sequence through legal screening. */
  sequenceScreeningLegalOverride: SuccessPayload;
  sequenceUnfavorite: SuccessPayload;
  sequenceUpdate: SequencePayload;
  signup: AuthenticatedUserPayload;
  sponsorCreate: SponsorPayload;
  sponsorDelete: SuccessPayload;
  sponsorFavorite: SuccessPayload;
  sponsorHistoryCommentCreate: CatalogHistoryItemPayload;
  sponsorUnfavorite: SuccessPayload;
  sponsorUpdate: SponsorPayload;
  testimonyCreate: TestimonyPayload;
  testimonyDelete: SuccessPayload;
  testimonyUpdate: TestimonyPayload;
  /** @deprecated unfavoriteRecording is replaced with recordingUnfavorite */
  unfavoriteRecording: Scalars['Boolean'];
  updateMyProfile: AuthenticatedUserPayload;
  userCreate: UserPayload;
  userDelete: SuccessPayload;
  /** Mark all notifications read for the current viewer. */
  userNotificationsRead: UserPayload;
  /** Sends a reset password email to the user, as the first step in the reset password process. */
  userRecover: SuccessPayload;
  /** Resets a user's password with a token received from `userRecover`. */
  userReset: SuccessPayload;
  userUpdate: UserPayload;
};


export type MutationBlogPostCreateArgs = {
  input: BlogPostCreateInput;
};


export type MutationBlogPostDeleteArgs = {
  blogPostId: Scalars['ID'];
};


export type MutationBlogPostUpdateArgs = {
  blogPostId: Scalars['ID'];
  input: BlogPostUpdateInput;
};


export type MutationCatalogHistoryCommentDeleteArgs = {
  catalogHistoryCommentId: Scalars['ID'];
};


export type MutationCatalogHistoryCommentUpdateArgs = {
  catalogHistoryCommentId: Scalars['ID'];
  input: CatalogHistoryCommentUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  collectionId: Scalars['ID'];
};


export type MutationCollectionFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionHistoryCommentCreateArgs = {
  collectionId: Scalars['ID'];
  input: CatalogHistoryCommentCreateInput;
};


export type MutationCollectionScreeningLegalOverrideArgs = {
  collectionId: Scalars['ID'];
};


export type MutationCollectionUnfavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionUpdateArgs = {
  collectionId: Scalars['ID'];
  input: CollectionUpdateInput;
};


export type MutationDistributionAgreementCreateArgs = {
  input: DistributionAgreementCreateInput;
};


export type MutationDistributionAgreementDeleteArgs = {
  distributionAgreementId: Scalars['ID'];
};


export type MutationDistributionAgreementHistoryCommentCreateArgs = {
  distributionAgreementId: Scalars['ID'];
  input: CatalogHistoryCommentCreateInput;
};


export type MutationDistributionAgreementUpdateArgs = {
  distributionAgreementId: Scalars['ID'];
  input: DistributionAgreementUpdateInput;
};


export type MutationFaqCreateArgs = {
  input: FaqCreateInput;
};


export type MutationFaqDeleteArgs = {
  faqId: Scalars['ID'];
};


export type MutationFaqUpdateArgs = {
  faqId: Scalars['ID'];
  input: FaqUpdateInput;
};


export type MutationFavoriteRecordingArgs = {
  id: Scalars['ID'];
};


export type MutationImageUploadArgs = {
  image: Scalars['Upload'];
  imageType: ImageContainer;
};


export type MutationLicenseCreateArgs = {
  input: LicenseCreateInput;
};


export type MutationLicenseDeleteArgs = {
  licenseId: Scalars['ID'];
};


export type MutationLicenseHistoryCommentCreateArgs = {
  input: CatalogHistoryCommentCreateInput;
  licenseId: Scalars['ID'];
};


export type MutationLicenseUpdateArgs = {
  input: LicenseUpdateInput;
  licenseId: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationLoginSocialArgs = {
  input: UserLoginSocialInput;
};


export type MutationMediaFileDeleteArgs = {
  mediaFileId: Scalars['ID'];
};


export type MutationMediaFileUploadAbortArgs = {
  mediaFileUploadId: Scalars['ID'];
};


export type MutationMediaFileUploadAssignArgs = {
  mediaFileUploadId: Scalars['ID'];
  recordingId: Scalars['ID'];
};


export type MutationMediaFileUploadFinishArgs = {
  input: MediaFileUploadFinishInput;
  mediaFileUploadId: Scalars['ID'];
};


export type MutationMediaFileUploadStartArgs = {
  input: MediaFileUploadStartInput;
};


export type MutationMediaReleaseCreateArgs = {
  input: MediaReleaseCreateInput;
};


export type MutationMediaReleaseDeleteArgs = {
  mediaReleaseId: Scalars['ID'];
};


export type MutationMediaReleaseFormCreateArgs = {
  input: MediaReleaseFormCreateInput;
};


export type MutationMediaReleaseFormDeleteArgs = {
  mediaReleaseFormId: Scalars['ID'];
};


export type MutationMediaReleaseFormTemplateUpdateArgs = {
  input: MediaReleaseFormUpdateInput;
  language: Language;
  type: MediaReleaseFormType;
};


export type MutationMediaReleaseFormUpdateArgs = {
  input: MediaReleaseFormUpdateInput;
  mediaReleaseFormId: Scalars['ID'];
};


export type MutationMediaReleaseUpdateArgs = {
  input: MediaReleaseUpdateInput;
  mediaReleaseId: Scalars['ID'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  pageId: Scalars['ID'];
};


export type MutationPageUpdateArgs = {
  input: PageUpdateInput;
  pageId: Scalars['ID'];
};


export type MutationPersonCreateArgs = {
  input: PersonCreateInput;
};


export type MutationPersonDeleteArgs = {
  personId: Scalars['ID'];
};


export type MutationPersonFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationPersonHistoryCommentCreateArgs = {
  input: CatalogHistoryCommentCreateInput;
  personId: Scalars['ID'];
};


export type MutationPersonUnfavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationPersonUpdateArgs = {
  input: PersonUpdateInput;
  personId: Scalars['ID'];
};


export type MutationPlaylistAddArgs = {
  input: UserPlaylistAddInput;
};


export type MutationPlaylistDeleteArgs = {
  playlistId: Scalars['ID'];
};


export type MutationPlaylistRecordingAddArgs = {
  playlistId: Scalars['ID'];
  recordingId: Scalars['ID'];
};


export type MutationPlaylistRecordingRemoveArgs = {
  playlistId: Scalars['ID'];
  recordingId: Scalars['ID'];
};


export type MutationPlaylistUpdateArgs = {
  input: UserPlaylistUpdateInput;
  playlistId: Scalars['ID'];
};


export type MutationRecordingArchiveArgs = {
  reason: Scalars['String'];
  recordingId: Scalars['ID'];
};


export type MutationRecordingCreateArgs = {
  input: RecordingCreateInput;
};


export type MutationRecordingDeleteArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingDraftingArgs = {
  finished: Scalars['Boolean'];
  recordingId: Scalars['ID'];
};


export type MutationRecordingFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationRecordingHistoryCommentCreateArgs = {
  input: CatalogHistoryCommentCreateInput;
  recordingId: Scalars['ID'];
};


export type MutationRecordingPlaybackSessionAdvanceArgs = {
  input: PlaybackSessionAdvanceInput;
  recordingId: Scalars['ID'];
};


export type MutationRecordingPlaybackSessionBeginArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingPlaybackSessionFinishArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingScreeningContentCheckoutCreateArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningContentCheckoutDeleteArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningContentEvaluateArgs = {
  approve: Scalars['Boolean'];
  recordingId: Scalars['ID'];
};


export type MutationRecordingScreeningContentMethodsSetArgs = {
  methods: Array<RecordingScreeningMethod>;
  recordingId: Scalars['ID'];
};


export type MutationRecordingScreeningIssueCreateArgs = {
  input: RecordingScreeningIssueInput;
  recordingId: Scalars['ID'];
};


export type MutationRecordingScreeningIssueDeleteArgs = {
  issueId: Scalars['ID'];
};


export type MutationRecordingScreeningIssueUpdateArgs = {
  input: RecordingScreeningIssueInput;
  issueId: Scalars['ID'];
};


export type MutationRecordingScreeningLegalCheckoutCreateArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningLegalCheckoutDeleteArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningLegalEvaluateArgs = {
  approve: Scalars['Boolean'];
  recordingId: Scalars['ID'];
};


export type MutationRecordingScreeningTechnicalCheckoutCreateArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningTechnicalCheckoutDeleteArgs = {
  recordingId: Scalars['ID'];
  userId: Maybe<Scalars['ID']>;
};


export type MutationRecordingScreeningTechnicalEvaluateArgs = {
  approve: Scalars['Boolean'];
  recordingId: Scalars['ID'];
};


export type MutationRecordingTranscriptDeleteArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingTranscriptUpdateArgs = {
  input: TranscriptUpdateInput;
  recordingId: Scalars['ID'];
};


export type MutationRecordingTranscriptionRequestArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingUnarchiveArgs = {
  recordingId: Scalars['ID'];
};


export type MutationRecordingUnfavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationRecordingUpdateArgs = {
  input: RecordingUpdateInput;
  recordingId: Scalars['ID'];
};


export type MutationSequenceCreateArgs = {
  input: SequenceCreateInput;
};


export type MutationSequenceDeleteArgs = {
  sequenceId: Scalars['ID'];
};


export type MutationSequenceFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationSequenceHistoryCommentCreateArgs = {
  input: CatalogHistoryCommentCreateInput;
  sequenceId: Scalars['ID'];
};


export type MutationSequenceScreeningLegalOverrideArgs = {
  sequenceId: Scalars['ID'];
};


export type MutationSequenceUnfavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationSequenceUpdateArgs = {
  input: SequenceUpdateInput;
  sequenceId: Scalars['ID'];
};


export type MutationSignupArgs = {
  input: UserSignupInput;
};


export type MutationSponsorCreateArgs = {
  input: SponsorCreateInput;
};


export type MutationSponsorDeleteArgs = {
  sponsorId: Scalars['ID'];
};


export type MutationSponsorFavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationSponsorHistoryCommentCreateArgs = {
  input: CatalogHistoryCommentCreateInput;
  sponsorId: Scalars['ID'];
};


export type MutationSponsorUnfavoriteArgs = {
  id: Scalars['ID'];
};


export type MutationSponsorUpdateArgs = {
  input: SponsorUpdateInput;
  sponsorId: Scalars['ID'];
};


export type MutationTestimonyCreateArgs = {
  input: TestimonyCreateInput;
};


export type MutationTestimonyDeleteArgs = {
  testimonyId: Scalars['ID'];
};


export type MutationTestimonyUpdateArgs = {
  input: TestimonyUpdateInput;
  testimonyId: Scalars['ID'];
};


export type MutationUnfavoriteRecordingArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateMyProfileArgs = {
  input: UserUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  userId: Scalars['ID'];
};


export type MutationUserRecoverArgs = {
  email: Scalars['String'];
};


export type MutationUserResetArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
  userId: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

export type NotificationChannel = Node & {
  __typename?: 'NotificationChannel';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type NotificationChannelConnection = {
  __typename?: 'NotificationChannelConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<NotificationChannelEdge>>;
  nodes: Maybe<Array<NotificationChannel>>;
  pageInfo: PageInfo;
};

export type NotificationChannelEdge = {
  __typename?: 'NotificationChannelEdge';
  cursor: Scalars['String'];
  node: NotificationChannel;
};

/** The periods notifications can be sent on. */
export enum NotificationFrequency {
  /** Notifications will be sent in a daily digest. */
  Daily = 'DAILY',
  /** Notifications will be sent immediately. */
  Immediate = 'IMMEDIATE',
  /** Notifications will be sent in a monthly digest. */
  Monthly = 'MONTHLY',
  /** Notifications will be sent in a weekly digest. */
  Weekly = 'WEEKLY'
}

export type NotificationSubscription = {
  __typename?: 'NotificationSubscription';
  frequency: NotificationFrequency;
  notificationChannel: NotificationChannel;
};

export type NotificationSubscriptionConnection = {
  __typename?: 'NotificationSubscriptionConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<NotificationSubscriptionEdge>>;
  nodes: Maybe<Array<NotificationSubscription>>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  cursor: Scalars['String'];
  node: NotificationSubscription;
};

export type NotificationSubscriptionInput = {
  frequency: NotificationFrequency;
  notificationChannelId: Scalars['ID'];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Page = Node & {
  __typename?: 'Page';
  body: Scalars['String'];
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  id: Scalars['ID'];
  isHidden: Scalars['Boolean'];
  pageMenu: Maybe<PageMenu>;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  slug: Scalars['String'];
  title: Scalars['String'];
  type: PageType;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<PageEdge>>;
  nodes: Maybe<Array<Page>>;
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  body: Scalars['String'];
  isHidden: Maybe<Scalars['Boolean']>;
  language: Language;
  pageMenuId: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: PageType;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  cursor: Scalars['String'];
  node: Page;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Maybe<Scalars['String']>;
};

export type PageMenu = Node & {
  __typename?: 'PageMenu';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PageMenuConnection = {
  __typename?: 'PageMenuConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<PageMenuEdge>>;
  nodes: Maybe<Array<PageMenu>>;
  pageInfo: PageInfo;
};

export type PageMenuEdge = {
  __typename?: 'PageMenuEdge';
  cursor: Scalars['String'];
  node: PageMenu;
};

export type PagePayload = {
  __typename?: 'PagePayload';
  errors: Array<InputValidationError>;
  page: Maybe<Page>;
};

/** The available page types. Only the `CUSTOM` type may have more than one `Page` per language. */
export enum PageType {
  About = 'ABOUT',
  Blog = 'BLOG',
  Custom = 'CUSTOM',
  Legal = 'LEGAL',
  Privacy = 'PRIVACY',
  SpiritOfAv = 'SPIRIT_OF_AV',
  Team = 'TEAM',
  TermsOfUse = 'TERMS_OF_USE',
  Testimonials = 'TESTIMONIALS'
}

export type PageUpdateInput = {
  body: Maybe<Scalars['String']>;
  isHidden: Maybe<Scalars['Boolean']>;
  pageMenuId: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type PagesOrder = {
  direction: OrderByDirection;
  field: PagesSortableField;
};

/** Properties by which page connections can be ordered. */
export enum PagesSortableField {
  CreatedAt = 'CREATED_AT',
  Slug = 'SLUG',
  Title = 'TITLE'
}

export type Person = Node & UniformResourceLocatable & {
  __typename?: 'Person';
  address: Maybe<Scalars['String']>;
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  description: Scalars['String'];
  designations: Scalars['String'];
  email: Maybe<Scalars['String']>;
  givenName: Scalars['String'];
  hidingReason: Maybe<Scalars['String']>;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  imageWithFallback: Image;
  internalContact: Maybe<InternalContact>;
  isHidden: Scalars['Boolean'];
  /** @deprecated Person.isPreapproved is replaced with Person.skipContentScreening */
  isPreapproved: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  /** @deprecated Person.photo is replaced with Person.image */
  photo: Maybe<Image>;
  /** @deprecated Person.photoWithFallback is replaced with Person.imageWithFallback */
  photoWithFallback: Image;
  recordings: RecordingConnection;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  suffix: Scalars['String'];
  summary: Scalars['String'];
  surname: Scalars['String'];
  title: Scalars['String'];
  viewerHasFavorited: Scalars['Boolean'];
  website: Maybe<Scalars['URL']>;
};


export type PersonHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type PersonRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
  withRole: Maybe<PersonsRoleField>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<PersonEdge>>;
  nodes: Maybe<Array<Person>>;
  pageInfo: PageInfo;
};

export type PersonCreateInput = {
  address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  designations: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  givenName: Scalars['String'];
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  internalContact: Maybe<InternalContactInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  /** Deprecated: isPreapproved is replaced with skipContentScreening. */
  isPreapproved: Maybe<Scalars['Boolean']>;
  language: Language;
  phone: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  suffix: Maybe<Scalars['String']>;
  summary: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  title: Maybe<Scalars['String']>;
  website: Maybe<Scalars['URL']>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonPayload = {
  __typename?: 'PersonPayload';
  errors: Array<InputValidationError>;
  person: Maybe<Person>;
};

export type PersonUpdateInput = {
  address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  designations: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  givenName: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  internalContact: Maybe<InternalContactInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  /** Deprecated: isPreapproved is replaced with skipContentScreening. */
  isPreapproved: Maybe<Scalars['Boolean']>;
  phone: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  suffix: Maybe<Scalars['String']>;
  summary: Maybe<Scalars['String']>;
  surname: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  website: Maybe<Scalars['URL']>;
};

export type PersonsOrder = {
  direction: OrderByDirection;
  field: PersonsSortableField;
};

/** The roles a Person can hold. */
export enum PersonsRoleField {
  Artist = 'ARTIST',
  Author = 'AUTHOR',
  Composer = 'COMPOSER',
  Narrator = 'NARRATOR',
  Speaker = 'SPEAKER',
  Translator = 'TRANSLATOR',
  Writer = 'WRITER'
}

/** Properties by which person connections can be ordered. */
export enum PersonsSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Name = 'NAME',
  RecordingPublishedAt = 'RECORDING_PUBLISHED_AT'
}

export type PlaybackSessionAdvanceInput = {
  /** The playback position as a percentage of the recording duration. */
  positionPercentage: Scalars['Float'];
};

export type PopularRecording = {
  __typename?: 'PopularRecording';
  recording: Recording;
  weight: Scalars['Float'];
};

export type PopularRecordingConnection = {
  __typename?: 'PopularRecordingConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<PopularRecordingEdge>>;
  nodes: Maybe<Array<PopularRecording>>;
  pageInfo: PageInfo;
};

export type PopularRecordingEdge = {
  __typename?: 'PopularRecordingEdge';
  cursor: Scalars['String'];
  node: PopularRecording;
};

export type Query = {
  __typename?: 'Query';
  adminImage: Maybe<Image>;
  adminImages: ImageConnectionSlim;
  audiobible: Maybe<Bible>;
  audiobibleChapter: Maybe<BibleChapter>;
  audiobibles: BibleConnection;
  /** Alias for `sequence(id: ID)` */
  audiobook: Maybe<Sequence>;
  /** Alias for `collection(id: ID)` */
  audiobookSeries: Maybe<Collection>;
  audiobookSerieses: CollectionConnection;
  /** Alias for `recording(id: ID)` */
  audiobookTrack: Maybe<Recording>;
  audiobookTracks: RecordingConnection;
  audiobooks: SequenceConnection;
  blogPost: Maybe<BlogPost>;
  blogPosts: BlogPostConnection;
  collection: Maybe<Collection>;
  collections: CollectionConnection;
  /** Alias for `collection(id: ID)` */
  conference: Maybe<Collection>;
  conferences: CollectionConnection;
  distributionAgreement: Maybe<DistributionAgreement>;
  distributionAgreements: DistributionAgreementConnection;
  faq: Maybe<Faq>;
  faqCategories: Maybe<FaqCategoryConnection>;
  faqs: FaqConnection;
  featuredBlogPosts: BlogPostConnection;
  /** @deprecated `featuredRecordings` is replaced by `recordings(isFeatured: true)` */
  featuredRecordings: RecordingConnection;
  license: Maybe<License>;
  licenses: LicenseConnection;
  me: Maybe<AuthenticatedUser>;
  mediaFileUploads: MediaFileUploadConnection;
  mediaFiles: MediaFileResultConnection;
  mediaRelease: Maybe<MediaRelease>;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
  mediaReleaseFormTemplates: Array<MediaReleaseFormTemplate>;
  mediaReleaseForms: MediaReleaseFormConnection;
  mediaReleases: MediaReleaseConnection;
  /** Alias for `sequence(id: ID)` */
  musicAlbum: Maybe<Sequence>;
  musicAlbums: SequenceConnection;
  /** @deprecated Query.musicBookTags will be replaced with a scriptural reference type. */
  musicBookTags: TagConnection;
  musicMoodTags: TagConnection;
  musicSerieses: CollectionConnection;
  /** Alias for `recording(id: ID)` */
  musicTrack: Maybe<Recording>;
  musicTracks: RecordingConnection;
  notificationChannels: Maybe<NotificationChannelConnection>;
  page: Maybe<Page>;
  pageMenus: Maybe<PageMenuConnection>;
  pages: PageConnection;
  person: Maybe<Person>;
  persons: PersonConnection;
  popularRecordings: PopularRecordingConnection;
  recording: Maybe<Recording>;
  recordingScreeningIssueType: Maybe<RecordingScreeningIssueType>;
  recordingScreeningIssueTypes: RecordingScreeningIssueTypeConnection;
  recordings: RecordingConnection;
  sequence: Maybe<Sequence>;
  sequences: SequenceConnection;
  /** Alias for `sequence(id: ID)` */
  series: Maybe<Sequence>;
  /** Series is both a singular and plural form. `series` returns a single sequence. `serieses` is an archaic plural form of series used here to avoid `seriess` or some other ugly solution. */
  serieses: SequenceConnection;
  /** Alias for `recording(id: ID)` */
  sermon: Maybe<Recording>;
  sermons: RecordingConnection;
  sponsor: Maybe<Sponsor>;
  sponsors: SponsorConnection;
  stories: RecordingConnection;
  /** Alias for `recording(id: ID)` */
  story: Maybe<Recording>;
  /** Alias for `collection(id: ID)` */
  storyProgram: Maybe<Collection>;
  storyPrograms: CollectionConnection;
  /** Alias for `sequence(id: ID)` */
  storySeason: Maybe<Sequence>;
  storySeasons: SequenceConnection;
  tags: TagConnection;
  testimonies: TestimonyConnection;
  testimony: Maybe<Testimony>;
  user: Maybe<User>;
  users: UserConnection;
  websites: WebsiteConnection;
};


export type QueryAdminImageArgs = {
  imageType: ImageContainer;
  name: Scalars['String'];
};


export type QueryAdminImagesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  imageType: ImageContainer;
};


export type QueryAudiobibleArgs = {
  id: Scalars['ID'];
};


export type QueryAudiobibleChapterArgs = {
  id: Scalars['ID'];
};


export type QueryAudiobiblesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type QueryAudiobookArgs = {
  id: Scalars['ID'];
};


export type QueryAudiobookSeriesArgs = {
  id: Scalars['ID'];
};


export type QueryAudiobookSeriesesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryAudiobookTrackArgs = {
  id: Scalars['ID'];
};


export type QueryAudiobookTracksArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryAudiobooksArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};


export type QueryBlogPostsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<BlogPostOrder>>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  after: Maybe<Scalars['String']>;
  contentType: Maybe<CollectionContentType>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryConferenceArgs = {
  id: Scalars['ID'];
};


export type QueryConferencesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryDistributionAgreementArgs = {
  id: Scalars['ID'];
};


export type QueryDistributionAgreementsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  isDefault: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  language: Language;
  licenseId: Maybe<Scalars['ID']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<DistributionAgreementsOrder>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryFaqArgs = {
  id: Scalars['ID'];
};


export type QueryFaqCategoriesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
};


export type QueryFaqsArgs = {
  after: Maybe<Scalars['String']>;
  faqCategoryId: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<FaqsOrder>>;
};


export type QueryFeaturedBlogPostsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
};


export type QueryFeaturedRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryLicenseArgs = {
  id: Scalars['ID'];
};


export type QueryLicensesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isDefault: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<LicensesOrder>>;
  search: Maybe<Scalars['String']>;
};


export type QueryMediaFileUploadsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  hasUploaded: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<MediaFileUploadsOrder>>;
  search: Maybe<Scalars['String']>;
};


export type QueryMediaFilesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<MediaFilesOrder>>;
  transcodingStatuses: Maybe<Array<MediaFileTranscodingStatus>>;
};


export type QueryMediaReleaseArgs = {
  id: Scalars['ID'];
};


export type QueryMediaReleaseFormArgs = {
  id: Scalars['ID'];
};


export type QueryMediaReleaseFormTemplatesArgs = {
  language: Language;
};


export type QueryMediaReleaseFormsArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  entityContentType: Maybe<MediaReleaseFormEntityContentType>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<MediaReleaseFormOrder>>;
  recordingId: Maybe<Scalars['ID']>;
  search: Maybe<Scalars['String']>;
  seriesId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  type: Maybe<MediaReleaseFormType>;
};


export type QueryMediaReleasesArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  mediaReleaseFormId: Maybe<Scalars['ID']>;
  mediaReleaseFormType: Maybe<MediaReleaseFormType>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<MediaReleaseOrder>>;
  personId: Maybe<Scalars['ID']>;
  recordingId: Maybe<Scalars['ID']>;
  search: Maybe<Scalars['String']>;
  seriesId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryMusicAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryMusicAlbumsArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryMusicBookTagsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
};


export type QueryMusicMoodTagsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
};


export type QueryMusicSeriesesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryMusicTrackArgs = {
  id: Scalars['ID'];
};


export type QueryMusicTracksArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryNotificationChannelsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
};


export type QueryPageMenusArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type QueryPagesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<PagesOrder>>;
  pageMenuId: Maybe<Scalars['Int']>;
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryPersonsArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<PersonsOrder>>;
  role: Maybe<PersonsRoleField>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  withContentTypes: Maybe<Array<RecordingContentType>>;
};


export type QueryPopularRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryRecordingArgs = {
  allowArchived: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type QueryRecordingScreeningIssueTypeArgs = {
  id: Scalars['ID'];
};


export type QueryRecordingScreeningIssueTypesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type QueryRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QuerySequenceArgs = {
  id: Scalars['ID'];
};


export type QuerySequencesArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentType: Maybe<SequenceContentType>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QuerySeriesArgs = {
  id: Scalars['ID'];
};


export type QuerySeriesesArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QuerySermonArgs = {
  id: Scalars['ID'];
};


export type QuerySermonsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QuerySponsorArgs = {
  id: Scalars['ID'];
};


export type QuerySponsorsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SponsorsOrder>>;
  search: Maybe<Scalars['String']>;
  withMusic: Maybe<Scalars['Boolean']>;
};


export type QueryStoriesArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  language: Language;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryStoryArgs = {
  id: Scalars['ID'];
};


export type QueryStoryProgramArgs = {
  id: Scalars['ID'];
};


export type QueryStoryProgramsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryStorySeasonArgs = {
  id: Scalars['ID'];
};


export type QueryStorySeasonsArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type QueryTagsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<TagsOrder>>;
  search: Maybe<Scalars['String']>;
};


export type QueryTestimoniesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<TestimoniesOrder>>;
};


export type QueryTestimonyArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  hasAnyRoles: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<UsersOrder>>;
  search: Maybe<Scalars['String']>;
  withReadAccess: Maybe<UserLanguageEntityInput>;
  withRole: Maybe<UserLanguageRoleInput>;
};


export type QueryWebsitesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};

export type Recording = Node & UniformResourceLocatable & {
  __typename?: 'Recording';
  /** Requires `ADMINISTRATION` role. */
  archiveDate: Maybe<Scalars['DateTime']>;
  /** Requires `ADMINISTRATION` role. */
  archiveReason: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  archiveUser: Maybe<User>;
  attachments: Array<Attachment>;
  audioFiles: Array<AudioFile>;
  bibleReferences: BibleReferenceRangeConnection;
  /** Whether the current viewer may archive the recording. */
  canArchive: Maybe<Scalars['Boolean']>;
  /** Whether the current viewer may delete the recording. */
  canDelete: Maybe<Scalars['Boolean']>;
  /** Whether the recording can be manually enqueued for transcribing. */
  canRequestTranscription: Maybe<Scalars['Boolean']>;
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  collection: Maybe<Collection>;
  contentScreeningCheckouts: Maybe<Array<RecordingScreeningCheckout>>;
  contentScreeningEvaluations: Maybe<Array<RecordingContentScreeningEvaluation>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: RecordingContentType;
  copyrightYear: Maybe<Scalars['Int']>;
  coverImage: Maybe<Image>;
  description: Maybe<Scalars['String']>;
  distributionAgreement: Maybe<DistributionAgreement>;
  /** @deprecated Recording.downloadDisabled is replaced with Recording.isDownloadAllowed */
  downloadDisabled: Scalars['Boolean'];
  /** The duration of the primary audio source in seconds. */
  duration: Scalars['Float'];
  hasAudio: Scalars['Boolean'];
  hasVideo: Scalars['Boolean'];
  hidingReason: Maybe<Scalars['String']>;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  imageWithFallback: Image;
  isDownloadAllowed: Scalars['Boolean'];
  isFeatured: Scalars['Boolean'];
  /** Whether the recording has been hidden. `isHidden` being `false` does not indicate the recording is published. Use `stage` to determine published status. */
  isHidden: Scalars['Boolean'];
  language: Language;
  legalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckout>>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
  persons: Array<Person>;
  publishDate: Maybe<Scalars['DateTime']>;
  recordingDate: Maybe<Scalars['DateTime']>;
  recordingTagSuggestions: RecordingTagSuggestionConnection;
  recordingTags: RecordingTagConnection;
  screeningIssues: Maybe<RecordingScreeningIssueConnection>;
  sequence: Maybe<Sequence>;
  /** The index of the recording within its sequence. */
  sequenceIndex: Maybe<Scalars['Int']>;
  /** The next recording within this recording's sequence. */
  sequenceNextRecording: Maybe<Recording>;
  /** The previous recording within this recording's sequence. */
  sequencePreviousRecording: Maybe<Recording>;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  sponsor: Maybe<Sponsor>;
  stage: RecordingStage;
  technicalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckout>>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  title: Scalars['String'];
  transcript: Maybe<Transcript>;
  transcriptionStatus: Maybe<RecordingTranscriptionStatus>;
  videoFiles: Array<VideoFile>;
  viewerHasFavorited: Scalars['Boolean'];
  viewerPlaybackSession: Maybe<RecordingPlaybackSession>;
  websites: Array<Website>;
};


export type RecordingAttachmentsArgs = {
  allowedContainers: Maybe<Array<MediaFileContainer>>;
};


export type RecordingAudioFilesArgs = {
  allowedContainers: Maybe<Array<MediaFileContainer>>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
};


export type RecordingBibleReferencesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type RecordingHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type RecordingPersonsArgs = {
  includeUnpublished: Maybe<Scalars['Boolean']>;
  role: Maybe<PersonsRoleField>;
};


export type RecordingRecordingTagSuggestionsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type RecordingRecordingTagsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type RecordingScreeningIssuesArgs = {
  after: Maybe<Scalars['String']>;
  category: Maybe<RecordingScreeningIssueCategory>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<RecordingScreeningIssueOrder>>;
};


export type RecordingVideoFilesArgs = {
  allowedContainers: Maybe<Array<MediaFileContainer>>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
};

export type RecordingConnection = {
  __typename?: 'RecordingConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<RecordingEdge>>;
  nodes: Maybe<Array<Recording>>;
  pageInfo: PageInfo;
};

export type RecordingContentScreeningEvaluation = {
  __typename?: 'RecordingContentScreeningEvaluation';
  /** The methods used in evaluating the recording. */
  methods: Array<RecordingScreeningMethod>;
  /** The screener's overall recommendation for the recording. */
  recommendation: RecordingContentScreeningEvaluationRecommendation;
  /** The screener user. */
  screener: User;
};

export type RecordingContentScreeningEvaluationPayload = {
  __typename?: 'RecordingContentScreeningEvaluationPayload';
  errors: Array<InputValidationError>;
  recordingContentScreeningEvaluation: Maybe<RecordingContentScreeningEvaluation>;
};

/** The content screening evaluation recommendations for a recording. */
export enum RecordingContentScreeningEvaluationRecommendation {
  Approve = 'APPROVE',
  NeedsEditing = 'NEEDS_EDITING',
  Pending = 'PENDING',
  Reject = 'REJECT'
}

/** The content screening statuses of a recording. */
export enum RecordingContentScreeningStatus {
  /** Approved by admin override */
  AdminOverride = 'ADMIN_OVERRIDE',
  /** Approved by screener consensus */
  Approved = 'APPROVED',
  /** Awaiting final authorization (Screener consensus) */
  ApprovedPendingAuthorization = 'APPROVED_PENDING_AUTHORIZATION',
  /** Awaiting screener consensus */
  PendingConsensus = 'PENDING_CONSENSUS',
  /** Awaiting more evaluations */
  PendingEvaluations = 'PENDING_EVALUATIONS',
  /** Awaiting re-evaluation */
  PendingReevaluation = 'PENDING_REEVALUATION',
  /** Approved by pre-approval */
  Preapproved = 'PREAPPROVED',
  /** Awaiting final authorization (Pre-approved) */
  PreapprovedPendingAuthorization = 'PREAPPROVED_PENDING_AUTHORIZATION',
  /** Rejected by screener consensus */
  Rejected = 'REJECTED',
  /** Screening not yet begun */
  Unevaluated = 'UNEVALUATED'
}

/** The available types of recordings. */
export enum RecordingContentType {
  AudiobookTrack = 'AUDIOBOOK_TRACK',
  MusicTrack = 'MUSIC_TRACK',
  Sermon = 'SERMON',
  Story = 'STORY'
}

export type RecordingCreateInput = {
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  contentScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  contentType: RecordingContentType;
  copyrightYear: Maybe<Scalars['Int']>;
  coverImage: Maybe<ImageInput>;
  description: Maybe<Scalars['String']>;
  distributionAgreementId: Scalars['ID'];
  hidingReason: Maybe<Scalars['String']>;
  isDownloadAllowed: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  legalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  /** Requires `ADMINISTRATION` role. */
  publishDate: Maybe<Scalars['DateTime']>;
  recordingDate: Maybe<Scalars['DateTime']>;
  recordingPersons: Maybe<Array<RecordingPersonRoleInput>>;
  recordingTags: Maybe<Array<RecordingTagInput>>;
  sequenceId: Maybe<Scalars['ID']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipTechnicalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Scalars['ID'];
  technicalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  title: Scalars['String'];
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type RecordingEdge = {
  __typename?: 'RecordingEdge';
  cursor: Scalars['String'];
  node: Recording;
};

/** The legal screening statuses of a recording. */
export enum RecordingLegalScreeningStatus {
  AdminOverride = 'ADMIN_OVERRIDE',
  Approved = 'APPROVED',
  Pending = 'PENDING',
  /** Awaiting re-evaluation */
  PendingReevaluation = 'PENDING_REEVALUATION',
  Preapproved = 'PREAPPROVED',
  Rejected = 'REJECTED',
  /** Not Yet Begun */
  Unevaluated = 'UNEVALUATED'
}

export type RecordingPayload = {
  __typename?: 'RecordingPayload';
  errors: Array<InputValidationError>;
  recording: Maybe<Recording>;
};

export type RecordingPersonInput = {
  /** The ID of a person associated with the recording. */
  personId: Scalars['ID'];
  /** The role a person has with the recording. */
  role: Maybe<PersonsRoleField>;
};

export type RecordingPersonRoleInput = {
  /** The ID of a person associated with the recording. */
  personId: Scalars['ID'];
  /** The role a person has with the recording. */
  role: PersonsRoleField;
};

export type RecordingPlaybackSession = {
  __typename?: 'RecordingPlaybackSession';
  createdAt: Scalars['DateTime'];
  /** The playback position as a percentage of the recording duration. */
  positionPercentage: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** The available bitrates of recordings. */
export enum RecordingQuality {
  Highest = 'HIGHEST',
  Low = 'LOW',
  Lowest = 'LOWEST'
}

export type RecordingScreeningCheckout = {
  __typename?: 'RecordingScreeningCheckout';
  /** The user who assigned the screener. */
  assigner: User;
  createdAt: Scalars['DateTime'];
  /** The screener user. */
  screener: User;
};

export type RecordingScreeningCheckoutInput = {
  userId: Scalars['ID'];
};

export type RecordingScreeningCheckoutPayload = {
  __typename?: 'RecordingScreeningCheckoutPayload';
  errors: Array<InputValidationError>;
  recordingScreeningCheckout: Maybe<RecordingScreeningCheckout>;
};

/** The recording content screening view filters. */
export enum RecordingScreeningContentViewFilter {
  /** Limits recordings to those assigned to users other than the viewer. */
  AssignedNonViewer = 'ASSIGNED_NON_VIEWER',
  /** Limits recordings to those assigned to the viewer. */
  AssignedViewer = 'ASSIGNED_VIEWER',
  /** Limits to unassigned recordings. */
  Unassigned = 'UNASSIGNED'
}

export type RecordingScreeningIssue = Node & {
  __typename?: 'RecordingScreeningIssue';
  /** In HH:mm:ss format. */
  endTime: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notes: Scalars['String'];
  screener: User;
  /** In HH:mm:ss format. */
  startTime: Maybe<Scalars['String']>;
  target: RecordingScreeningIssueTarget;
  type: RecordingScreeningIssueType;
};

/** The recording screening issue categories. */
export enum RecordingScreeningIssueCategory {
  /** General Issues */
  General = 'GENERAL',
  /** Spirit of AudioVerse */
  SpiritOfAudioverse = 'SPIRIT_OF_AUDIOVERSE',
  /** Technical Issues */
  Technical = 'TECHNICAL'
}

export type RecordingScreeningIssueConnection = {
  __typename?: 'RecordingScreeningIssueConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<RecordingScreeningIssueEdge>>;
  nodes: Maybe<Array<RecordingScreeningIssue>>;
  pageInfo: PageInfo;
};

export type RecordingScreeningIssueEdge = {
  __typename?: 'RecordingScreeningIssueEdge';
  cursor: Scalars['String'];
  node: RecordingScreeningIssue;
};

export type RecordingScreeningIssueInput = {
  /** In HH:mm:ss format. */
  endTime: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  recordingScreeningIssueTypeId: Scalars['ID'];
  /** In HH:mm:ss format. */
  startTime: Maybe<Scalars['String']>;
  target: RecordingScreeningIssueTarget;
};

export type RecordingScreeningIssueOrder = {
  direction: OrderByDirection;
  field: RecordingScreeningIssuesSortableField;
};

export type RecordingScreeningIssuePayload = {
  __typename?: 'RecordingScreeningIssuePayload';
  errors: Array<InputValidationError>;
  recordingScreeningIssue: Maybe<RecordingScreeningIssue>;
};

/** The applicable recording format for the screening issue. */
export enum RecordingScreeningIssueTarget {
  Audio = 'AUDIO',
  Video = 'VIDEO'
}

export type RecordingScreeningIssueType = Node & {
  __typename?: 'RecordingScreeningIssueType';
  category: RecordingScreeningIssueCategory;
  id: Scalars['ID'];
  notes: Scalars['String'];
  title: Scalars['String'];
};

export type RecordingScreeningIssueTypeConnection = {
  __typename?: 'RecordingScreeningIssueTypeConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<RecordingScreeningIssueTypeEdge>>;
  nodes: Maybe<Array<RecordingScreeningIssueType>>;
  pageInfo: PageInfo;
};

export type RecordingScreeningIssueTypeEdge = {
  __typename?: 'RecordingScreeningIssueTypeEdge';
  cursor: Scalars['String'];
  node: RecordingScreeningIssueType;
};

/** Properties by which recording screening issue connections can be ordered. */
export enum RecordingScreeningIssuesSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** The supported screening evaluation methods. */
export enum RecordingScreeningMethod {
  Live = 'LIVE',
  Recording = 'RECORDING',
  ThirdPartyInfo = 'THIRD_PARTY_INFO',
  Transcript = 'TRANSCRIPT'
}

/** The stages a recording may be in. */
export enum RecordingStage {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Scheduling = 'SCHEDULING',
  Screening = 'SCREENING',
  Withdrawn = 'WITHDRAWN'
}

export type RecordingTag = {
  __typename?: 'RecordingTag';
  tag: Tag;
};

export type RecordingTagConnection = {
  __typename?: 'RecordingTagConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<RecordingTagEdge>>;
  nodes: Maybe<Array<RecordingTag>>;
  pageInfo: PageInfo;
};

export type RecordingTagEdge = {
  __typename?: 'RecordingTagEdge';
  cursor: Scalars['String'];
  node: RecordingTag;
};

export type RecordingTagInput = {
  /** The name of a tag. */
  tagName: Scalars['String'];
};

export type RecordingTagSuggestion = {
  __typename?: 'RecordingTagSuggestion';
  name: Scalars['String'];
};

export type RecordingTagSuggestionConnection = {
  __typename?: 'RecordingTagSuggestionConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<RecordingTagSuggestionEdge>>;
  nodes: Maybe<Array<RecordingTagSuggestion>>;
  pageInfo: PageInfo;
};

export type RecordingTagSuggestionEdge = {
  __typename?: 'RecordingTagSuggestionEdge';
  cursor: Scalars['String'];
  node: RecordingTagSuggestion;
};

/** The technical screening statuses of a recording. */
export enum RecordingTechnicalScreeningStatus {
  AdminOverride = 'ADMIN_OVERRIDE',
  Approved = 'APPROVED',
  Pending = 'PENDING',
  /** Awaiting re-evaluation */
  PendingReevaluation = 'PENDING_REEVALUATION',
  Rejected = 'REJECTED',
  /** Not Yet Begun */
  Unevaluated = 'UNEVALUATED'
}

/** The status of a recording's transcript. */
export enum RecordingTranscriptionStatus {
  /** Transcription completed. */
  Complete = 'COMPLETE',
  /** Transcription failed. */
  Failed = 'FAILED',
  /** Transcription in process. */
  Processing = 'PROCESSING',
  /** Transcription has been requested. */
  Requested = 'REQUESTED',
  /** Not Yet Begun */
  Unstarted = 'UNSTARTED'
}

export type RecordingUpdateInput = {
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  contentScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  copyrightYear: Maybe<Scalars['Int']>;
  coverImage: Maybe<ImageInput>;
  description: Maybe<Scalars['String']>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  hidingReason: Maybe<Scalars['String']>;
  isDownloadAllowed: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  isHidden: Maybe<Scalars['Boolean']>;
  legalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  /** Requires `ADMINISTRATION` role. */
  publishDate: Maybe<Scalars['DateTime']>;
  recordingDate: Maybe<Scalars['DateTime']>;
  recordingPersons: Maybe<Array<RecordingPersonRoleInput>>;
  recordingTags: Maybe<Array<RecordingTagInput>>;
  sequenceId: Maybe<Scalars['ID']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipTechnicalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Maybe<Scalars['ID']>;
  technicalScreeningCheckouts: Maybe<Array<RecordingScreeningCheckoutInput>>;
  title: Maybe<Scalars['String']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type RecordingsOrder = {
  direction: OrderByDirection;
  field: RecordingsSortableField;
};

/** Properties by which recording connections can be ordered. */
export enum RecordingsSortableField {
  CollectionTitle = 'COLLECTION_TITLE',
  CreatedAt = 'CREATED_AT',
  DownloadsAllTime = 'DOWNLOADS_ALL_TIME',
  Id = 'ID',
  PublishedAt = 'PUBLISHED_AT',
  RecordedAt = 'RECORDED_AT',
  SequenceTitle = 'SEQUENCE_TITLE',
  SponsorTitle = 'SPONSOR_TITLE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export type Sequence = Node & UniformResourceLocatable & {
  __typename?: 'Sequence';
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  collection: Maybe<Collection>;
  contentType: SequenceContentType;
  description: Scalars['String'];
  /** The combined duration of the sequence's recordings in seconds. */
  duration: Scalars['Float'];
  endDate: Maybe<Scalars['Date']>;
  hidingReason: Maybe<Scalars['String']>;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  imageWithFallback: Image;
  isHidden: Maybe<Scalars['Boolean']>;
  /** @deprecated Sequence.logoImage is replaced with Sequence.image */
  logoImage: Maybe<Image>;
  /** @deprecated Sequence.logoImageWithFallback is replaced with Sequence.imageWithFallback */
  logoImageWithFallback: Image;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
  persons: PersonConnection;
  recordings: RecordingConnection;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsor: Maybe<Sponsor>;
  startDate: Maybe<Scalars['Date']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  viewerHasFavorited: Scalars['Boolean'];
  /** The percentage of the associated recordings the viewer has finished playing. */
  viewerPlaybackCompletedPercentage: Scalars['Float'];
};


export type SequenceHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type SequencePersonsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<PersonsOrder>>;
  role: Maybe<PersonsRoleField>;
  search: Maybe<Scalars['String']>;
};


export type SequenceRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type SequenceConnection = {
  __typename?: 'SequenceConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<SequenceEdge>>;
  nodes: Maybe<Array<Sequence>>;
  pageInfo: PageInfo;
};

/** The available types of sequence. */
export enum SequenceContentType {
  Audiobook = 'AUDIOBOOK',
  MusicAlbum = 'MUSIC_ALBUM',
  Series = 'SERIES',
  StorySeason = 'STORY_SEASON'
}

export type SequenceCreateInput = {
  collectionId: Maybe<Scalars['ID']>;
  contentType: SequenceContentType;
  description: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Scalars['ID'];
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SequenceEdge = {
  __typename?: 'SequenceEdge';
  cursor: Scalars['String'];
  node: Sequence;
};

export type SequenceOrder = {
  direction: OrderByDirection;
  field: SequenceSortableField;
};

export type SequencePayload = {
  __typename?: 'SequencePayload';
  errors: Array<InputValidationError>;
  sequence: Maybe<Sequence>;
};

/** Properties by which sequence connections can be ordered. */
export enum SequenceSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  RecordingPublishedAt = 'RECORDING_PUBLISHED_AT',
  Title = 'TITLE'
}

export type SequenceUpdateInput = {
  collectionId: Maybe<Scalars['ID']>;
  description: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  sponsorId: Maybe<Scalars['ID']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type Sponsor = Node & UniformResourceLocatable & {
  __typename?: 'Sponsor';
  address: Maybe<Scalars['String']>;
  /** The canonical HTML path to this resource. */
  canonicalPath: Scalars['String'];
  /** The canonical URL to this resource. */
  canonicalUrl: Scalars['URL'];
  collections: CollectionConnection;
  defaultDistributionAgreement: Maybe<DistributionAgreement>;
  description: Scalars['String'];
  distributionAgreements: Maybe<DistributionAgreementConnection>;
  email: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  history: Maybe<CatalogHistoryItemConnection>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  imageWithFallback: Image;
  internalContact: Maybe<InternalContact>;
  isHidden: Scalars['Boolean'];
  location: Maybe<Scalars['String']>;
  /** @deprecated Sponsor.logoImage is replaced with Sponsor.image */
  logoImage: Maybe<Image>;
  /** @deprecated Sponsor.logoImageWithFallback is replaced with Sponsor.imageWithFallback */
  logoImageWithFallback: Image;
  mediaReleaseForm: Maybe<MediaReleaseForm>;
  phone: Maybe<Scalars['String']>;
  recordings: RecordingConnection;
  sequences: SequenceConnection;
  /** A shareable short URL to this resource. */
  shareUrl: Scalars['URL'];
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  viewerHasFavorited: Scalars['Boolean'];
  website: Maybe<Scalars['URL']>;
};


export type SponsorCollectionsArgs = {
  after: Maybe<Scalars['String']>;
  contentType?: Maybe<CollectionContentType>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CollectionsOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type SponsorDistributionAgreementsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  isDefault: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  licenseId: Maybe<Scalars['ID']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<DistributionAgreementsOrder>>;
  search: Maybe<Scalars['String']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};


export type SponsorHistoryArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type SponsorRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type SponsorSequencesArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentType?: Maybe<SequenceContentType>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<SequenceOrder>>;
  persons: Maybe<Array<RecordingPersonInput>>;
  search: Maybe<Scalars['String']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
};

export type SponsorConnection = {
  __typename?: 'SponsorConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<SponsorEdge>>;
  nodes: Maybe<Array<Sponsor>>;
  pageInfo: PageInfo;
};

export type SponsorCreateInput = {
  address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  distributionAgreements: Maybe<Array<SponsorDistributionAgreementInput>>;
  email: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  internalContact: Maybe<InternalContactInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  language: Language;
  location: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
  website: Maybe<Scalars['URL']>;
};

export type SponsorDistributionAgreementInput = {
  isDefault: Maybe<Scalars['Boolean']>;
  isRetired: Maybe<Scalars['Boolean']>;
  licenseId: Scalars['ID'];
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SponsorEdge = {
  __typename?: 'SponsorEdge';
  cursor: Scalars['String'];
  node: Sponsor;
};

export type SponsorPayload = {
  __typename?: 'SponsorPayload';
  errors: Array<InputValidationError>;
  sponsor: Maybe<Sponsor>;
};

export type SponsorUpdateInput = {
  address: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  distributionAgreements: Maybe<Array<SponsorDistributionAgreementInput>>;
  email: Maybe<Scalars['String']>;
  hidingReason: Maybe<Scalars['String']>;
  image: Maybe<ImageInput>;
  internalContact: Maybe<InternalContactInput>;
  isHidden: Maybe<Scalars['Boolean']>;
  location: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  /** Requires `ADMINISTRATION` role. */
  skipContentScreening: Maybe<Scalars['Boolean']>;
  /** Requires `ADMINISTRATION` role. */
  skipLegalScreening: Maybe<Scalars['Boolean']>;
  summary: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  website: Maybe<Scalars['URL']>;
};

export type SponsorsOrder = {
  direction: OrderByDirection;
  field: SponsorsSortableField;
};

/** Properties by which sponsor connections can be ordered. */
export enum SponsorsSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  RecordingPublishedAt = 'RECORDING_PUBLISHED_AT',
  Title = 'TITLE'
}

export type SuccessPayload = {
  __typename?: 'SuccessPayload';
  errors: Array<InputValidationError>;
  success: Scalars['Boolean'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  recordings: RecordingConnection;
};


export type TagRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  contentType: Maybe<RecordingContentType>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<TagEdge>>;
  nodes: Maybe<Array<Tag>>;
  pageInfo: PageInfo;
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String'];
  node: Tag;
};

export type TagsOrder = {
  direction: OrderByDirection;
  field: TagsSortableField;
};

/** Properties by which tags connections can be ordered. */
export enum TagsSortableField {
  Name = 'NAME',
  RecordingCount = 'RECORDING_COUNT',
  SermonCount = 'SERMON_COUNT'
}

export type TestimoniesOrder = {
  direction: OrderByDirection;
  field: TestimoniesSortableField;
};

/** Properties by which testimony connections can be ordered. */
export enum TestimoniesSortableField {
  WrittenDate = 'WRITTEN_DATE'
}

/** A user testimony. */
export type Testimony = Node & {
  __typename?: 'Testimony';
  author: Scalars['String'];
  body: Scalars['String'];
  id: Scalars['ID'];
  publishDate: Scalars['DateTime'];
  writtenDate: Scalars['DateTime'];
};

export type TestimonyConnection = {
  __typename?: 'TestimonyConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<TestimonyEdge>>;
  nodes: Maybe<Array<Testimony>>;
  pageInfo: PageInfo;
};

export type TestimonyCreateInput = {
  author: Scalars['String'];
  body: Scalars['String'];
  language: Language;
  publishDate: Scalars['DateTime'];
  writtenDate: Scalars['DateTime'];
};

export type TestimonyEdge = {
  __typename?: 'TestimonyEdge';
  cursor: Scalars['String'];
  node: Testimony;
};

export type TestimonyPayload = {
  __typename?: 'TestimonyPayload';
  errors: Array<InputValidationError>;
  testimony: Maybe<Testimony>;
};

export type TestimonyUpdateInput = {
  author: Maybe<Scalars['String']>;
  body: Maybe<Scalars['String']>;
  publishDate: Maybe<Scalars['DateTime']>;
  writtenDate: Maybe<Scalars['DateTime']>;
};

/** The supported timezones. */
export enum Timezone {
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  AfricaAccra = 'AFRICA_ACCRA',
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  AfricaAlgiers = 'AFRICA_ALGIERS',
  AfricaAsmara = 'AFRICA_ASMARA',
  AfricaAsmera = 'AFRICA_ASMERA',
  AfricaBamako = 'AFRICA_BAMAKO',
  AfricaBangui = 'AFRICA_BANGUI',
  AfricaBanjul = 'AFRICA_BANJUL',
  AfricaBissau = 'AFRICA_BISSAU',
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  AfricaCairo = 'AFRICA_CAIRO',
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  AfricaCeuta = 'AFRICA_CEUTA',
  AfricaConakry = 'AFRICA_CONAKRY',
  AfricaDakar = 'AFRICA_DAKAR',
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  AfricaDouala = 'AFRICA_DOUALA',
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  AfricaFreetown = 'AFRICA_FREETOWN',
  AfricaGaborone = 'AFRICA_GABORONE',
  AfricaHarare = 'AFRICA_HARARE',
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  AfricaJuba = 'AFRICA_JUBA',
  AfricaKampala = 'AFRICA_KAMPALA',
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  AfricaKigali = 'AFRICA_KIGALI',
  AfricaKinshasa = 'AFRICA_KINSHASA',
  AfricaLagos = 'AFRICA_LAGOS',
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  AfricaLome = 'AFRICA_LOME',
  AfricaLuanda = 'AFRICA_LUANDA',
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  AfricaLusaka = 'AFRICA_LUSAKA',
  AfricaMalabo = 'AFRICA_MALABO',
  AfricaMaputo = 'AFRICA_MAPUTO',
  AfricaMaseru = 'AFRICA_MASERU',
  AfricaMbabane = 'AFRICA_MBABANE',
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  AfricaMonrovia = 'AFRICA_MONROVIA',
  AfricaNairobi = 'AFRICA_NAIROBI',
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  AfricaNiamey = 'AFRICA_NIAMEY',
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  AfricaTimbuktu = 'AFRICA_TIMBUKTU',
  AfricaTripoli = 'AFRICA_TRIPOLI',
  AfricaTunis = 'AFRICA_TUNIS',
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  AmericaAdak = 'AMERICA_ADAK',
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  AmericaAntigua = 'AMERICA_ANTIGUA',
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  AmericaArgentinaComodrivadavia = 'AMERICA_ARGENTINA_COMODRIVADAVIA',
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  AmericaAruba = 'AMERICA_ARUBA',
  AmericaAsuncion = 'AMERICA_ASUNCION',
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  AmericaAtka = 'AMERICA_ATKA',
  AmericaBahia = 'AMERICA_BAHIA',
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  AmericaBarbados = 'AMERICA_BARBADOS',
  AmericaBelem = 'AMERICA_BELEM',
  AmericaBelize = 'AMERICA_BELIZE',
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  AmericaBogota = 'AMERICA_BOGOTA',
  AmericaBoise = 'AMERICA_BOISE',
  AmericaBuenosAires = 'AMERICA_BUENOS_AIRES',
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  AmericaCancun = 'AMERICA_CANCUN',
  AmericaCaracas = 'AMERICA_CARACAS',
  AmericaCatamarca = 'AMERICA_CATAMARCA',
  AmericaCayenne = 'AMERICA_CAYENNE',
  AmericaCayman = 'AMERICA_CAYMAN',
  AmericaChicago = 'AMERICA_CHICAGO',
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  AmericaCoralHarbour = 'AMERICA_CORAL_HARBOUR',
  AmericaCordoba = 'AMERICA_CORDOBA',
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  AmericaCreston = 'AMERICA_CRESTON',
  AmericaCuiaba = 'AMERICA_CUIABA',
  AmericaCuracao = 'AMERICA_CURACAO',
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  AmericaDawson = 'AMERICA_DAWSON',
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  AmericaDenver = 'AMERICA_DENVER',
  AmericaDetroit = 'AMERICA_DETROIT',
  AmericaDominica = 'AMERICA_DOMINICA',
  AmericaEdmonton = 'AMERICA_EDMONTON',
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  AmericaEnsenada = 'AMERICA_ENSENADA',
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  AmericaFortWayne = 'AMERICA_FORT_WAYNE',
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  AmericaGodthab = 'AMERICA_GODTHAB',
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  AmericaGrenada = 'AMERICA_GRENADA',
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  AmericaGuyana = 'AMERICA_GUYANA',
  AmericaHalifax = 'AMERICA_HALIFAX',
  AmericaHavana = 'AMERICA_HAVANA',
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  AmericaIndianapolis = 'AMERICA_INDIANAPOLIS',
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  AmericaInuvik = 'AMERICA_INUVIK',
  AmericaIqaluit = 'AMERICA_IQALUIT',
  AmericaJamaica = 'AMERICA_JAMAICA',
  AmericaJujuy = 'AMERICA_JUJUY',
  AmericaJuneau = 'AMERICA_JUNEAU',
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  AmericaKnoxIn = 'AMERICA_KNOX_IN',
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  AmericaLima = 'AMERICA_LIMA',
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  AmericaLouisville = 'AMERICA_LOUISVILLE',
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  AmericaMaceio = 'AMERICA_MACEIO',
  AmericaManagua = 'AMERICA_MANAGUA',
  AmericaManaus = 'AMERICA_MANAUS',
  AmericaMarigot = 'AMERICA_MARIGOT',
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  AmericaMendoza = 'AMERICA_MENDOZA',
  AmericaMenominee = 'AMERICA_MENOMINEE',
  AmericaMerida = 'AMERICA_MERIDA',
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  AmericaMiquelon = 'AMERICA_MIQUELON',
  AmericaMoncton = 'AMERICA_MONCTON',
  AmericaMonterrey = 'AMERICA_MONTERREY',
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  AmericaMontreal = 'AMERICA_MONTREAL',
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  AmericaNassau = 'AMERICA_NASSAU',
  AmericaNewYork = 'AMERICA_NEW_YORK',
  AmericaNipigon = 'AMERICA_NIPIGON',
  AmericaNome = 'AMERICA_NOME',
  AmericaNoronha = 'AMERICA_NORONHA',
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  AmericaNuuk = 'AMERICA_NUUK',
  AmericaOjinaga = 'AMERICA_OJINAGA',
  AmericaPanama = 'AMERICA_PANAMA',
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  AmericaPhoenix = 'AMERICA_PHOENIX',
  AmericaPortoAcre = 'AMERICA_PORTO_ACRE',
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  AmericaRecife = 'AMERICA_RECIFE',
  AmericaRegina = 'AMERICA_REGINA',
  AmericaResolute = 'AMERICA_RESOLUTE',
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  AmericaRosario = 'AMERICA_ROSARIO',
  AmericaSantarem = 'AMERICA_SANTAREM',
  AmericaSantaIsabel = 'AMERICA_SANTA_ISABEL',
  AmericaSantiago = 'AMERICA_SANTIAGO',
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  AmericaShiprock = 'AMERICA_SHIPROCK',
  AmericaSitka = 'AMERICA_SITKA',
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  AmericaStKitts = 'AMERICA_ST_KITTS',
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  AmericaThule = 'AMERICA_THULE',
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  AmericaTijuana = 'AMERICA_TIJUANA',
  AmericaToronto = 'AMERICA_TORONTO',
  AmericaTortola = 'AMERICA_TORTOLA',
  AmericaVancouver = 'AMERICA_VANCOUVER',
  AmericaVirgin = 'AMERICA_VIRGIN',
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  AmericaYakutat = 'AMERICA_YAKUTAT',
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  AntarcticaSouthPole = 'ANTARCTICA_SOUTH_POLE',
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  AsiaAden = 'ASIA_ADEN',
  AsiaAlmaty = 'ASIA_ALMATY',
  AsiaAmman = 'ASIA_AMMAN',
  AsiaAnadyr = 'ASIA_ANADYR',
  AsiaAqtau = 'ASIA_AQTAU',
  AsiaAqtobe = 'ASIA_AQTOBE',
  AsiaAshgabat = 'ASIA_ASHGABAT',
  AsiaAshkhabad = 'ASIA_ASHKHABAD',
  AsiaAtyrau = 'ASIA_ATYRAU',
  AsiaBaghdad = 'ASIA_BAGHDAD',
  AsiaBahrain = 'ASIA_BAHRAIN',
  AsiaBaku = 'ASIA_BAKU',
  AsiaBangkok = 'ASIA_BANGKOK',
  AsiaBarnaul = 'ASIA_BARNAUL',
  AsiaBeirut = 'ASIA_BEIRUT',
  AsiaBishkek = 'ASIA_BISHKEK',
  AsiaBrunei = 'ASIA_BRUNEI',
  AsiaCalcutta = 'ASIA_CALCUTTA',
  AsiaChita = 'ASIA_CHITA',
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  AsiaChongqing = 'ASIA_CHONGQING',
  AsiaChungking = 'ASIA_CHUNGKING',
  AsiaColombo = 'ASIA_COLOMBO',
  AsiaDacca = 'ASIA_DACCA',
  AsiaDamascus = 'ASIA_DAMASCUS',
  AsiaDhaka = 'ASIA_DHAKA',
  AsiaDili = 'ASIA_DILI',
  AsiaDubai = 'ASIA_DUBAI',
  AsiaDushanbe = 'ASIA_DUSHANBE',
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  AsiaGaza = 'ASIA_GAZA',
  AsiaHarbin = 'ASIA_HARBIN',
  AsiaHebron = 'ASIA_HEBRON',
  AsiaHongKong = 'ASIA_HONG_KONG',
  AsiaHovd = 'ASIA_HOVD',
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  AsiaIstanbul = 'ASIA_ISTANBUL',
  AsiaJakarta = 'ASIA_JAKARTA',
  AsiaJayapura = 'ASIA_JAYAPURA',
  AsiaJerusalem = 'ASIA_JERUSALEM',
  AsiaKabul = 'ASIA_KABUL',
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  AsiaKarachi = 'ASIA_KARACHI',
  AsiaKashgar = 'ASIA_KASHGAR',
  AsiaKathmandu = 'ASIA_KATHMANDU',
  AsiaKatmandu = 'ASIA_KATMANDU',
  AsiaKhandyga = 'ASIA_KHANDYGA',
  AsiaKolkata = 'ASIA_KOLKATA',
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  AsiaKuching = 'ASIA_KUCHING',
  AsiaKuwait = 'ASIA_KUWAIT',
  AsiaMacao = 'ASIA_MACAO',
  AsiaMacau = 'ASIA_MACAU',
  AsiaMagadan = 'ASIA_MAGADAN',
  AsiaMakassar = 'ASIA_MAKASSAR',
  AsiaManila = 'ASIA_MANILA',
  AsiaMuscat = 'ASIA_MUSCAT',
  AsiaNicosia = 'ASIA_NICOSIA',
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  AsiaOmsk = 'ASIA_OMSK',
  AsiaOral = 'ASIA_ORAL',
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  AsiaPontianak = 'ASIA_PONTIANAK',
  AsiaPyongyang = 'ASIA_PYONGYANG',
  AsiaQatar = 'ASIA_QATAR',
  AsiaQostanay = 'ASIA_QOSTANAY',
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  AsiaRangoon = 'ASIA_RANGOON',
  AsiaRiyadh = 'ASIA_RIYADH',
  AsiaSaigon = 'ASIA_SAIGON',
  AsiaSakhalin = 'ASIA_SAKHALIN',
  AsiaSamarkand = 'ASIA_SAMARKAND',
  AsiaSeoul = 'ASIA_SEOUL',
  AsiaShanghai = 'ASIA_SHANGHAI',
  AsiaSingapore = 'ASIA_SINGAPORE',
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  AsiaTaipei = 'ASIA_TAIPEI',
  AsiaTashkent = 'ASIA_TASHKENT',
  AsiaTbilisi = 'ASIA_TBILISI',
  AsiaTehran = 'ASIA_TEHRAN',
  AsiaTelAviv = 'ASIA_TEL_AVIV',
  AsiaThimbu = 'ASIA_THIMBU',
  AsiaThimphu = 'ASIA_THIMPHU',
  AsiaTokyo = 'ASIA_TOKYO',
  AsiaTomsk = 'ASIA_TOMSK',
  AsiaUjungPandang = 'ASIA_UJUNG_PANDANG',
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  AsiaUlanBator = 'ASIA_ULAN_BATOR',
  AsiaUrumqi = 'ASIA_URUMQI',
  AsiaUstNera = 'ASIA_UST_NERA',
  AsiaVientiane = 'ASIA_VIENTIANE',
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  AsiaYakutsk = 'ASIA_YAKUTSK',
  AsiaYangon = 'ASIA_YANGON',
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  AsiaYerevan = 'ASIA_YEREVAN',
  AtlanticAzores = 'ATLANTIC_AZORES',
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  AtlanticCanary = 'ATLANTIC_CANARY',
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  AtlanticFaeroe = 'ATLANTIC_FAEROE',
  AtlanticFaroe = 'ATLANTIC_FAROE',
  AtlanticJanMayen = 'ATLANTIC_JAN_MAYEN',
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  AtlanticStanley = 'ATLANTIC_STANLEY',
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  AustraliaAct = 'AUSTRALIA_ACT',
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  AustraliaCanberra = 'AUSTRALIA_CANBERRA',
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  AustraliaHobart = 'AUSTRALIA_HOBART',
  AustraliaLhi = 'AUSTRALIA_LHI',
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  AustraliaNorth = 'AUSTRALIA_NORTH',
  AustraliaNsw = 'AUSTRALIA_NSW',
  AustraliaPerth = 'AUSTRALIA_PERTH',
  AustraliaQueensland = 'AUSTRALIA_QUEENSLAND',
  AustraliaSouth = 'AUSTRALIA_SOUTH',
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  AustraliaTasmania = 'AUSTRALIA_TASMANIA',
  AustraliaVictoria = 'AUSTRALIA_VICTORIA',
  AustraliaWest = 'AUSTRALIA_WEST',
  AustraliaYancowinna = 'AUSTRALIA_YANCOWINNA',
  BrazilAcre = 'BRAZIL_ACRE',
  BrazilDenoronha = 'BRAZIL_DENORONHA',
  BrazilEast = 'BRAZIL_EAST',
  BrazilWest = 'BRAZIL_WEST',
  CanadaAtlantic = 'CANADA_ATLANTIC',
  CanadaCentral = 'CANADA_CENTRAL',
  CanadaEastern = 'CANADA_EASTERN',
  CanadaMountain = 'CANADA_MOUNTAIN',
  CanadaNewfoundland = 'CANADA_NEWFOUNDLAND',
  CanadaPacific = 'CANADA_PACIFIC',
  CanadaSaskatchewan = 'CANADA_SASKATCHEWAN',
  CanadaYukon = 'CANADA_YUKON',
  ChileContinental = 'CHILE_CONTINENTAL',
  ChileEasterisland = 'CHILE_EASTERISLAND',
  EtcGreenwich = 'ETC_GREENWICH',
  EtcUct = 'ETC_UCT',
  EtcUniversal = 'ETC_UNIVERSAL',
  EtcUtc = 'ETC_UTC',
  EtcZulu = 'ETC_ZULU',
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  EuropeAndorra = 'EUROPE_ANDORRA',
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  EuropeAthens = 'EUROPE_ATHENS',
  EuropeBelfast = 'EUROPE_BELFAST',
  EuropeBelgrade = 'EUROPE_BELGRADE',
  EuropeBerlin = 'EUROPE_BERLIN',
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  EuropeBrussels = 'EUROPE_BRUSSELS',
  EuropeBucharest = 'EUROPE_BUCHAREST',
  EuropeBudapest = 'EUROPE_BUDAPEST',
  EuropeBusingen = 'EUROPE_BUSINGEN',
  EuropeChisinau = 'EUROPE_CHISINAU',
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  EuropeDublin = 'EUROPE_DUBLIN',
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  EuropeHelsinki = 'EUROPE_HELSINKI',
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  EuropeJersey = 'EUROPE_JERSEY',
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  EuropeKiev = 'EUROPE_KIEV',
  EuropeKirov = 'EUROPE_KIROV',
  EuropeLisbon = 'EUROPE_LISBON',
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  EuropeLondon = 'EUROPE_LONDON',
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  EuropeMadrid = 'EUROPE_MADRID',
  EuropeMalta = 'EUROPE_MALTA',
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  EuropeMinsk = 'EUROPE_MINSK',
  EuropeMonaco = 'EUROPE_MONACO',
  EuropeMoscow = 'EUROPE_MOSCOW',
  EuropeNicosia = 'EUROPE_NICOSIA',
  EuropeOslo = 'EUROPE_OSLO',
  EuropeParis = 'EUROPE_PARIS',
  EuropePodgorica = 'EUROPE_PODGORICA',
  EuropePrague = 'EUROPE_PRAGUE',
  EuropeRiga = 'EUROPE_RIGA',
  EuropeRome = 'EUROPE_ROME',
  EuropeSamara = 'EUROPE_SAMARA',
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  EuropeSaratov = 'EUROPE_SARATOV',
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  EuropeSkopje = 'EUROPE_SKOPJE',
  EuropeSofia = 'EUROPE_SOFIA',
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  EuropeTallinn = 'EUROPE_TALLINN',
  EuropeTirane = 'EUROPE_TIRANE',
  EuropeTiraspol = 'EUROPE_TIRASPOL',
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  EuropeVaduz = 'EUROPE_VADUZ',
  EuropeVatican = 'EUROPE_VATICAN',
  EuropeVienna = 'EUROPE_VIENNA',
  EuropeVilnius = 'EUROPE_VILNIUS',
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  EuropeWarsaw = 'EUROPE_WARSAW',
  EuropeZagreb = 'EUROPE_ZAGREB',
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  EuropeZurich = 'EUROPE_ZURICH',
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  IndianChagos = 'INDIAN_CHAGOS',
  IndianChristmas = 'INDIAN_CHRISTMAS',
  IndianCocos = 'INDIAN_COCOS',
  IndianComoro = 'INDIAN_COMORO',
  IndianKerguelen = 'INDIAN_KERGUELEN',
  IndianMahe = 'INDIAN_MAHE',
  IndianMaldives = 'INDIAN_MALDIVES',
  IndianMauritius = 'INDIAN_MAURITIUS',
  IndianMayotte = 'INDIAN_MAYOTTE',
  IndianReunion = 'INDIAN_REUNION',
  MexicoBajanorte = 'MEXICO_BAJANORTE',
  MexicoBajasur = 'MEXICO_BAJASUR',
  MexicoGeneral = 'MEXICO_GENERAL',
  PacificApia = 'PACIFIC_APIA',
  PacificAuckland = 'PACIFIC_AUCKLAND',
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  PacificChatham = 'PACIFIC_CHATHAM',
  PacificChuuk = 'PACIFIC_CHUUK',
  PacificEaster = 'PACIFIC_EASTER',
  PacificEfate = 'PACIFIC_EFATE',
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  PacificFiji = 'PACIFIC_FIJI',
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  PacificGambier = 'PACIFIC_GAMBIER',
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  PacificGuam = 'PACIFIC_GUAM',
  PacificHonolulu = 'PACIFIC_HONOLULU',
  PacificJohnston = 'PACIFIC_JOHNSTON',
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  PacificKosrae = 'PACIFIC_KOSRAE',
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  PacificMajuro = 'PACIFIC_MAJURO',
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  PacificMidway = 'PACIFIC_MIDWAY',
  PacificNauru = 'PACIFIC_NAURU',
  PacificNiue = 'PACIFIC_NIUE',
  PacificNorfolk = 'PACIFIC_NORFOLK',
  PacificNoumea = 'PACIFIC_NOUMEA',
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  PacificPalau = 'PACIFIC_PALAU',
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  PacificPohnpei = 'PACIFIC_POHNPEI',
  PacificPonape = 'PACIFIC_PONAPE',
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  PacificSaipan = 'PACIFIC_SAIPAN',
  PacificSamoa = 'PACIFIC_SAMOA',
  PacificTahiti = 'PACIFIC_TAHITI',
  PacificTarawa = 'PACIFIC_TARAWA',
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  PacificTruk = 'PACIFIC_TRUK',
  PacificWake = 'PACIFIC_WAKE',
  PacificWallis = 'PACIFIC_WALLIS',
  PacificYap = 'PACIFIC_YAP',
  UsAlaska = 'US_ALASKA',
  UsAleutian = 'US_ALEUTIAN',
  UsArizona = 'US_ARIZONA',
  UsCentral = 'US_CENTRAL',
  UsEastern = 'US_EASTERN',
  UsEastIndiana = 'US_EAST_INDIANA',
  UsHawaii = 'US_HAWAII',
  UsIndianaStarke = 'US_INDIANA_STARKE',
  UsMichigan = 'US_MICHIGAN',
  UsMountain = 'US_MOUNTAIN',
  UsPacific = 'US_PACIFIC',
  UsSamoa = 'US_SAMOA'
}

export type Transcript = Node & {
  __typename?: 'Transcript';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type TranscriptUpdateInput = {
  transcript: Scalars['String'];
};


/** Represents a type that can be retrieved by a URL. */
export type UniformResourceLocatable = {
  canonicalPath: Scalars['String'];
  canonicalUrl: Scalars['URL'];
  shareUrl: Scalars['URL'];
};


export type User = Node & {
  __typename?: 'User';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** Whether recordings should autoplay by default. */
  autoplay: Scalars['Boolean'];
  /** The name of the city, district, village, or town. */
  city: Maybe<Scalars['String']>;
  /** The name of the country. */
  country: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** The user's email address. */
  email: Scalars['String'];
  favoritePersons: PersonConnection;
  favoriteRecordings: RecordingConnection;
  favorites: UserFavoriteConnection;
  /** The user's first name. */
  givenName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user's avatar image. */
  image: Maybe<Image>;
  /** Whether the user has permission to perform all administrative functions. */
  isSuperuser: Scalars['Boolean'];
  /** Whether the user has verified their email. */
  isVerified: Scalars['Boolean'];
  /** The user's preferred interface language. */
  language: UserLanguage;
  /** The last date the user had activity. */
  lastActivity: Scalars['DateTime'];
  /** The full name of the user, based on the values for givenName and surname. */
  name: Scalars['String'];
  /** Available only for viewer `User`. */
  notificationSubscriptions: Maybe<NotificationSubscriptionConnection>;
  /** Available only for viewer `User`. */
  notifications: Maybe<CatalogHistoryItemConnection>;
  playlist: Maybe<UserPlaylist>;
  playlists: UserPlaylistConnection;
  /** The postal or zip code. */
  postalCode: Maybe<Scalars['String']>;
  /** The user's preferred audio bitrate in kbps. */
  preferredAudioQuality: RecordingQuality;
  /** The name of the region, such as the province, state, or district. */
  province: Maybe<Scalars['String']>;
  /** The user's administrative roles. */
  roles: Array<UserLanguageRole>;
  /** The user's last name. */
  surname: Maybe<Scalars['String']>;
  /** The user's timezone. */
  timezone: Timezone;
};


export type UserFavoritePersonsArgs = {
  after: Maybe<Scalars['String']>;
  collectionId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<PersonsOrder>>;
  role: Maybe<PersonsRoleField>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  withContentTypes: Maybe<Array<RecordingContentType>>;
};


export type UserFavoriteRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Array<RecordingsOrder>>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};


export type UserFavoritesArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  groupSequences: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<FavoritesOrder>>;
  types: Maybe<Array<FavoritableCatalogEntityType>>;
};


export type UserNotificationSubscriptionsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
};


export type UserNotificationsArgs = {
  after: Maybe<Scalars['String']>;
  dateRange: Maybe<DateRangeInput>;
  first: Maybe<Scalars['Int']>;
  isSticky: Maybe<Scalars['Boolean']>;
  isUnread: Maybe<Scalars['Boolean']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<CatalogHistoryItemOrder>>;
  viewFilters: Maybe<Array<CatalogHistoryItemViewFilter>>;
};


export type UserPlaylistArgs = {
  id: Scalars['ID'];
};


export type UserPlaylistsArgs = {
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  language: Language;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<UserPlaylistsOrder>>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<UserEdge>>;
  nodes: Maybe<Array<User>>;
  pageInfo: PageInfo;
};

export type UserCreateInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** Whether recordings should autoplay by default. */
  autoplay: Maybe<Scalars['Boolean']>;
  /** The name of the city, district, village, or town. */
  city: Maybe<Scalars['String']>;
  /** The name of the country. */
  country: Maybe<Scalars['String']>;
  /** The user's email address. */
  email: Scalars['String'];
  /** The user's first name. */
  givenName: Maybe<Scalars['String']>;
  /** The user's avatar image. */
  image: Maybe<Scalars['Upload']>;
  /** Whether the user has permission to perform all administrative functions. */
  isSuperuser: Maybe<Scalars['Boolean']>;
  /** The user's preferred interface language. */
  language: Maybe<Language>;
  notificationSubscriptions: Maybe<Array<NotificationSubscriptionInput>>;
  /** The user's password. */
  password: Maybe<Scalars['String']>;
  /** The postal or zip code. */
  postalCode: Maybe<Scalars['String']>;
  /** The user's preferred audio bitrate in kbps. */
  preferredAudioQuality: Maybe<RecordingQuality>;
  /** The name of the region, such as the province, state, or district. */
  province: Maybe<Scalars['String']>;
  /** The user's administrative roles. Viewers with `ADMINISTRATION` role(s) may only manage roles for the languages they hold `ADMINISTRATION` role(s) for. */
  roles: Maybe<Array<UserLanguageRoleInput>>;
  /** The user's last name. */
  surname: Maybe<Scalars['String']>;
  /** The user's timezone. */
  timezone: Maybe<Timezone>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserFavorite = {
  __typename?: 'UserFavorite';
  createdAt: Scalars['DateTime'];
  entity: FavoriteEntityUnion;
};

export type UserFavoriteConnection = {
  __typename?: 'UserFavoriteConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<UserFavoriteEdge>>;
  nodes: Maybe<Array<UserFavorite>>;
  pageInfo: PageInfo;
};

export type UserFavoriteEdge = {
  __typename?: 'UserFavoriteEdge';
  cursor: Scalars['String'];
  node: UserFavorite;
};

/** User languages */
export enum UserLanguage {
  Abkhazian = 'ABKHAZIAN',
  Afrikaans = 'AFRIKAANS',
  Akan = 'AKAN',
  Amharic = 'AMHARIC',
  Bokmal = 'BOKMAL',
  Burmese = 'BURMESE',
  Cebuano = 'CEBUANO',
  Chinese = 'CHINESE',
  Croatian = 'CROATIAN',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Dinka = 'DINKA',
  Dutch = 'DUTCH',
  English = 'ENGLISH',
  Erzya = 'ERZYA',
  Filipino = 'FILIPINO',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Greek = 'GREEK',
  Haitian = 'HAITIAN',
  Hebrew = 'HEBREW',
  Hindi = 'HINDI',
  Hungarian = 'HUNGARIAN',
  Indonesian = 'INDONESIAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Kikuyu = 'KIKUYU',
  Korean = 'KOREAN',
  Latvian = 'LATVIAN',
  Luo = 'LUO',
  Malay = 'MALAY',
  Mongolian = 'MONGOLIAN',
  Nepali = 'NEPALI',
  Norwegian = 'NORWEGIAN',
  Philippine = 'PHILIPPINE',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  Samoan = 'SAMOAN',
  Shan = 'SHAN',
  Shona = 'SHONA',
  Slovenian = 'SLOVENIAN',
  Spanish = 'SPANISH',
  Swahili = 'SWAHILI',
  Swedish = 'SWEDISH',
  Tagalog = 'TAGALOG',
  Tamil = 'TAMIL',
  Tswana = 'TSWANA',
  Twi = 'TWI',
  Xhosa = 'XHOSA',
  Zulu = 'ZULU'
}

export type UserLanguageEntityInput = {
  /** The entity type. */
  entityType: CatalogEntityType;
  /** The language scope for the entity. */
  language: Language;
};

export type UserLanguageRole = {
  __typename?: 'UserLanguageRole';
  /** The language scope for this role. */
  language: Language;
  /** The  administrative role. */
  role: UserRole;
};

export type UserLanguageRoleInput = {
  /** The language scope for this role. */
  language: Language;
  /** The  administrative role. */
  role: UserRole;
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginSocialInput = {
  givenName: Maybe<Scalars['String']>;
  socialId: Scalars['String'];
  socialName: UserSocialServiceName;
  socialToken: Scalars['String'];
  surname: Maybe<Scalars['String']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  errors: Array<InputValidationError>;
  user: Maybe<User>;
};

export type UserPlaylist = Node & {
  __typename?: 'UserPlaylist';
  createdAt: Scalars['DateTime'];
  hasRecording: Scalars['Boolean'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  language: Language;
  recordings: RecordingConnection;
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type UserPlaylistHasRecordingArgs = {
  id: Scalars['ID'];
};


export type UserPlaylistRecordingsArgs = {
  after: Maybe<Scalars['String']>;
  bibleReferences: Maybe<Array<BibleReferenceRangeInput>>;
  collectionId: Maybe<Scalars['ID']>;
  collectionIds: Maybe<Array<Scalars['ID']>>;
  contentScreeningStatus: Maybe<RecordingContentScreeningStatus>;
  distributionAgreementId: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  hasVideo: Maybe<Scalars['Boolean']>;
  includeUnpublished: Maybe<Scalars['Boolean']>;
  isFeatured: Maybe<Scalars['Boolean']>;
  legalScreeningStatus: Maybe<RecordingLegalScreeningStatus>;
  offset: Maybe<Scalars['Int']>;
  onlyArchived: Maybe<Scalars['Boolean']>;
  person: Maybe<RecordingPersonInput>;
  persons: Maybe<Array<RecordingPersonInput>>;
  presenterId: Maybe<Scalars['ID']>;
  publishDates: Maybe<Array<DateRangeInput>>;
  recordingDates: Maybe<Array<DateRangeInput>>;
  screeningContentViewFilter: Maybe<RecordingScreeningContentViewFilter>;
  search: Maybe<Scalars['String']>;
  sequenceId: Maybe<Scalars['ID']>;
  sequenceIds: Maybe<Array<Scalars['ID']>>;
  sponsorId: Maybe<Scalars['ID']>;
  sponsorIds: Maybe<Array<Scalars['ID']>>;
  stage: Maybe<RecordingStage>;
  tagName: Maybe<Scalars['String']>;
  technicalScreeningStatus: Maybe<RecordingTechnicalScreeningStatus>;
  updatedDates: Maybe<Array<DateRangeInput>>;
  viewerHasFavorited: Maybe<Scalars['Boolean']>;
  websiteIds: Maybe<Array<Scalars['ID']>>;
};

export type UserPlaylistAddInput = {
  isPublic: Scalars['Boolean'];
  language: Language;
  recordingIds: Maybe<Array<Scalars['ID']>>;
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type UserPlaylistConnection = {
  __typename?: 'UserPlaylistConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<UserPlaylistEdge>>;
  nodes: Maybe<Array<UserPlaylist>>;
  pageInfo: PageInfo;
};

export type UserPlaylistEdge = {
  __typename?: 'UserPlaylistEdge';
  cursor: Scalars['String'];
  node: UserPlaylist;
};

export type UserPlaylistUpdateInput = {
  isPublic: Scalars['Boolean'];
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type UserPlaylistsOrder = {
  direction: OrderByDirection;
  field: UserPlaylistsSortableField;
};

/** Properties by which a user's playlists connection can be ordered. */
export enum UserPlaylistsSortableField {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  Title = 'TITLE'
}

/** The administrative roles a user may hold. */
export enum UserRole {
  /** Language Administrator */
  Administration = 'ADMINISTRATION',
  Communications = 'COMMUNICATIONS',
  ContentScreener = 'CONTENT_SCREENER',
  Editor = 'EDITOR',
  Equipment = 'EQUIPMENT',
  LegalScreener = 'LEGAL_SCREENER',
  Mediamanager = 'MEDIAMANAGER',
  Stats = 'STATS',
  TechnicalScreener = 'TECHNICAL_SCREENER'
}

export type UserSignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The supported social login services. */
export enum UserSocialServiceName {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export type UserUpdateInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Maybe<Scalars['String']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2: Maybe<Scalars['String']>;
  /** Whether recordings should autoplay by default. */
  autoplay: Maybe<Scalars['Boolean']>;
  /** The name of the city, district, village, or town. */
  city: Maybe<Scalars['String']>;
  /** The name of the country. */
  country: Maybe<Scalars['String']>;
  /** The user's email address. */
  email: Maybe<Scalars['String']>;
  /** The user's first name. */
  givenName: Maybe<Scalars['String']>;
  /** The user's avatar image. */
  image: Maybe<Scalars['Upload']>;
  /** Whether the user has permission to perform all administrative functions. */
  isSuperuser: Maybe<Scalars['Boolean']>;
  /** The user's preferred interface language. */
  language: Maybe<Language>;
  notificationSubscriptions: Maybe<Array<NotificationSubscriptionInput>>;
  /** The user's password. */
  password: Maybe<Scalars['String']>;
  /** The postal or zip code. */
  postalCode: Maybe<Scalars['String']>;
  /** The user's preferred audio bitrate in kbps. */
  preferredAudioQuality: Maybe<RecordingQuality>;
  /** The name of the region, such as the province, state, or district. */
  province: Maybe<Scalars['String']>;
  /** The user's administrative roles. Viewers with `ADMINISTRATION` role(s) may only manage roles for the languages they hold `ADMINISTRATION` role(s) for. */
  roles: Maybe<Array<UserLanguageRoleInput>>;
  /** The user's last name. */
  surname: Maybe<Scalars['String']>;
  /** The user's timezone. */
  timezone: Maybe<Timezone>;
};

export type UsersOrder = {
  direction: OrderByDirection;
  field: UsersSortableField;
};

/** Properties by which user connections can be ordered. */
export enum UsersSortableField {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID'
}

export type VideoFile = Node & {
  __typename?: 'VideoFile';
  /** Bitrate of the video file in kbps. */
  bitrate: Scalars['Int'];
  /** Whether the current viewer may delete the file. */
  canDelete: Maybe<Scalars['Boolean']>;
  container: Scalars['String'];
  /** The duration of the video file in seconds. */
  duration: Scalars['Float'];
  filename: Scalars['String'];
  /** In bytes */
  filesize: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  /** The URL to record video views for analytics. */
  logUrl: Maybe<Scalars['URL']>;
  mimeType: Scalars['String'];
  recording: Recording;
  transcodingStatus: MediaFileTranscodingStatus;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['URL'];
  width: Scalars['Int'];
};


export type VideoFileUrlArgs = {
  skipAnalytics: Maybe<Scalars['Boolean']>;
};

export type Website = Node & {
  __typename?: 'Website';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type WebsiteConnection = {
  __typename?: 'WebsiteConnection';
  aggregate: Maybe<Aggregate>;
  edges: Maybe<Array<WebsiteEdge>>;
  nodes: Maybe<Array<Website>>;
  pageInfo: PageInfo;
};

export type WebsiteEdge = {
  __typename?: 'WebsiteEdge';
  cursor: Scalars['String'];
  node: Website;
};

export type GetWithAuthGuardDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWithAuthGuardDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )> }
);

export type ProgressBarFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id'>
  & AndMiniplayerFragment
);

export type ButtonDownloadFragment = (
  { __typename?: 'Recording' }
  & { videoDownloads: Array<(
    { __typename?: 'VideoFile' }
    & Pick<VideoFile, 'id' | 'url' | 'filesize'>
  )>, audioDownloads: Array<(
    { __typename?: 'AudioFile' }
    & Pick<AudioFile, 'id' | 'url' | 'filesize'>
  )> }
);

export type ButtonPlayFragment = (
  { __typename?: 'Recording' }
  & AndMiniplayerFragment
);

export type CardBibleChapterFragment = (
  { __typename?: 'BibleChapter' }
  & Pick<BibleChapter, 'id' | 'title' | 'url'>
);

export type CardPlayableFragment = (
  { __typename?: 'Recording' }
  & ProgressBarFragment
);

export type CardPostFragment = (
  { __typename?: 'BlogPost' }
  & Pick<BlogPost, 'publishDate' | 'title' | 'teaser' | 'canonicalUrl' | 'readingDuration'>
  & { image: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'url'>
  )> }
);

export type CardSermonFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title' | 'duration'>
  & { persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )>, sequence: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'title'>
    & { recordings: (
      { __typename?: 'RecordingConnection' }
      & { aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
  & CardPlayableFragment
);

export type CardSongFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'title' | 'duration'>
  & { persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )>, sequence: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'id' | 'title'>
  )> }
  & CardPlayableFragment
);

export type CardStoryFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'title' | 'duration'>
  & { persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )>, sequence: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'title'>
    & { recordings: (
      { __typename?: 'RecordingConnection' }
      & { aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
  & CardPlayableFragment
);

export type CardTopicFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'title' | 'duration'>
  & { persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )> }
  & CardPlayableFragment
);

export type CopyrightInfoFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'copyrightYear'>
  & { distributionAgreement: Maybe<(
    { __typename?: 'DistributionAgreement' }
    & { sponsor: Maybe<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'title'>
    )>, license: Maybe<(
      { __typename?: 'License' }
      & Pick<License, 'summary'>
      & { image: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      )> }
    )> }
  )>, sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'title'>
  )> }
);

export type CopyrightInfosFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'copyrightYear'>
  & { distributionAgreement: Maybe<(
    { __typename?: 'DistributionAgreement' }
    & Pick<DistributionAgreement, 'id'>
  )>, sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'id'>
  )> }
  & CopyrightInfoFragment
);

export type LoginForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { userRecover: (
    { __typename?: 'SuccessPayload' }
    & Pick<SuccessPayload, 'success'>
    & { errors: Array<(
      { __typename?: 'InputValidationError' }
      & Pick<InputValidationError, 'message'>
    )> }
  ) }
);

export type MediaFormatSwitcherFragment = (
  { __typename?: 'Recording' }
  & AndMiniplayerFragment
);

export type PlaybackTimesFragment = (
  { __typename?: 'Recording' }
  & AndMiniplayerFragment
);

export type GetPlaylistButtonDataQueryVariables = Exact<{
  language: Language;
  recordingId: Scalars['ID'];
}>;


export type GetPlaylistButtonDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & { playlists: (
        { __typename?: 'UserPlaylistConnection' }
        & { nodes: Maybe<Array<(
          { __typename?: 'UserPlaylist' }
          & Pick<UserPlaylist, 'id' | 'title' | 'hasRecording'>
        )>> }
      ) }
    ) }
  )> }
);

export type RecordingListFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title' | 'description' | 'duration' | 'hasVideo' | 'recordingDate' | 'canonicalUrl'>
  & { imageWithFallback: (
    { __typename?: 'Image' }
    & Pick<Image, 'url'>
  ), persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )> }
);

export type SpeakerNameFragment = (
  { __typename?: 'Person' }
  & Pick<Person, 'id' | 'name' | 'summary' | 'website' | 'viewerHasFavorited'>
  & { imageWithFallback: (
    { __typename?: 'Image' }
    & Pick<Image, 'url'>
  ) }
);

export type SponsorInfoFragment = (
  { __typename?: 'Sponsor' }
  & Pick<Sponsor, 'id' | 'title'>
);

export type TeaseRecordingFragment = (
  { __typename?: 'Recording' }
  & ButtonPlayFragment
);

export type PlayerFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title'>
  & AndMiniplayerFragment
  & ButtonDownloadFragment
  & ProgressBarFragment
);

export type PlaylistFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title'>
  & { audioDownloads: Array<(
    { __typename?: 'AudioFile' }
    & Pick<AudioFile, 'url' | 'filesize'>
  )> }
  & AndMiniplayerFragment
);

export type RecordingFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title' | 'description' | 'recordingDate' | 'sequenceIndex' | 'shareUrl'>
  & { persons: Array<(
    { __typename?: 'Person' }
    & SpeakerNameFragment
  )>, videoDownloads: Array<(
    { __typename?: 'VideoFile' }
    & Pick<VideoFile, 'id' | 'url' | 'filesize'>
  )>, audioDownloads: Array<(
    { __typename?: 'AudioFile' }
    & Pick<AudioFile, 'id' | 'url' | 'filesize'>
  )>, imageWithFallback: (
    { __typename?: 'Image' }
    & Pick<Image, 'url'>
  ), recordingTags: (
    { __typename?: 'RecordingTagConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'RecordingTag' }
      & { tag: (
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      ) }
    )>> }
  ), sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & SponsorInfoFragment
  )>, sequence: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'id' | 'title'>
    & { recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & Pick<Recording, 'id'>
        & TeaseRecordingFragment
      )>> }
    ) }
  )>, transcript: Maybe<(
    { __typename?: 'Transcript' }
    & Pick<Transcript, 'text'>
  )> }
  & CopyrightInfoFragment
  & PlayerFragment
);

export type TestimoniesFragment = (
  { __typename?: 'Testimony' }
  & Pick<Testimony, 'id' | 'body' | 'author'>
);

export type AndMiniplayerFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'id' | 'title' | 'duration'>
  & { sequence: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'title'>
  )>, audioFiles: Array<(
    { __typename?: 'AudioFile' }
    & Pick<AudioFile, 'url' | 'filesize' | 'mimeType'>
  )>, videoFiles: Array<(
    { __typename?: 'VideoFile' }
    & Pick<VideoFile, 'url' | 'filesize' | 'mimeType'>
  )>, videoStreams: Array<(
    { __typename?: 'VideoFile' }
    & Pick<VideoFile, 'url' | 'filesize' | 'mimeType'>
  )> }
);

export type GetAccountPlaylistsPageDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetAccountPlaylistsPageDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & { playlists: (
        { __typename?: 'UserPlaylistConnection' }
        & { nodes: Maybe<Array<(
          { __typename?: 'UserPlaylist' }
          & Pick<UserPlaylist, 'id' | 'title' | 'isPublic' | 'summary'>
          & { recordings: (
            { __typename?: 'RecordingConnection' }
            & { aggregate: Maybe<(
              { __typename?: 'Aggregate' }
              & Pick<Aggregate, 'count'>
            )> }
          ) }
        )>> }
      ) }
    ) }
  )> }
);

export type AddAccountPlaylistMutationVariables = Exact<{
  isPublic: Scalars['Boolean'];
  language: Language;
  recordingIds: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  summary: Maybe<Scalars['String']>;
  title: Scalars['String'];
}>;


export type AddAccountPlaylistMutation = (
  { __typename?: 'Mutation' }
  & { playlistAdd: (
    { __typename?: 'UserPlaylist' }
    & Pick<UserPlaylist, 'id'>
  ) }
);

export type GetProfileDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & ProfileFragment
    ) }
  )> }
);

export type UpdateProfileDataMutationVariables = Exact<{
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  givenName: Maybe<Scalars['String']>;
  surname: Maybe<Scalars['String']>;
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  province: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
}>;


export type UpdateProfileDataMutation = (
  { __typename?: 'Mutation' }
  & { updateMyProfile: (
    { __typename?: 'AuthenticatedUserPayload' }
    & { errors: Array<(
      { __typename?: 'InputValidationError' }
      & Pick<InputValidationError, 'message'>
    )>, authenticatedUser: Maybe<(
      { __typename?: 'AuthenticatedUser' }
      & { user: (
        { __typename?: 'User' }
        & ProfileFragment
      ) }
    )> }
  ) }
);

export type ProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'givenName' | 'surname' | 'address1' | 'address2' | 'city' | 'province' | 'postalCode' | 'country'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthenticatedUserPayload' }
    & { errors: Array<(
      { __typename?: 'InputValidationError' }
      & Pick<InputValidationError, 'message'>
    )> }
  ) }
);

export type RegisterSocialMutationVariables = Exact<{
  socialId: Scalars['String'];
  socialName: UserSocialServiceName;
  socialToken: Scalars['String'];
  givenName: Maybe<Scalars['String']>;
  surname: Maybe<Scalars['String']>;
}>;


export type RegisterSocialMutation = (
  { __typename?: 'Mutation' }
  & { loginSocial: (
    { __typename?: 'AuthenticatedUserPayload' }
    & { authenticatedUser: Maybe<(
      { __typename?: 'AuthenticatedUser' }
      & Pick<AuthenticatedUser, 'sessionToken'>
    )>, errors: Array<(
      { __typename?: 'InputValidationError' }
      & Pick<InputValidationError, 'message'>
    )> }
  ) }
);

export type RegisterIsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type RegisterIsLoggedInQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email'>
    ) }
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { userReset: (
    { __typename?: 'SuccessPayload' }
    & Pick<SuccessPayload, 'success'>
    & { errors: Array<(
      { __typename?: 'InputValidationError' }
      & Pick<InputValidationError, 'message'>
    )> }
  ) }
);

export type GetAudiobookDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAudiobookDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { audiobook: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'title' | 'shareUrl'>
    & { sponsor: Maybe<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'title'>
      & SponsorInfoFragment
    )>, recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & Pick<Recording, 'id' | 'title'>
        & CopyrightInfosFragment
        & WriteFeedFileFragment
        & PlayerFragment
        & PlaylistFragment
      )>> }
    ) }
  )> }
);

export type GetAudiobookDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetAudiobookDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { audiobooks: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id'>
    )>> }
  ) }
);

export type GetAudiobookListPageDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetAudiobookListPageDataQuery = (
  { __typename?: 'Query' }
  & { audiobooks: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetAudiobookListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetAudiobookListPathsDataQuery = (
  { __typename?: 'Query' }
  & { audiobooks: (
    { __typename?: 'SequenceConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetBibleBookDetailPageDataQueryVariables = Exact<{
  versionId: Scalars['ID'];
  bookId: Scalars['ID'];
}>;


export type GetBibleBookDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { audiobible: Maybe<(
    { __typename?: 'Bible' }
    & Pick<Bible, 'title' | 'copyrightText'>
    & { book: (
      { __typename?: 'BibleBook' }
      & Pick<BibleBook, 'title' | 'shareUrl'>
      & { chapters: Array<(
        { __typename?: 'BibleChapter' }
        & Pick<BibleChapter, 'id' | 'title' | 'url'>
        & { verses: Array<(
          { __typename?: 'BibleVerse' }
          & Pick<BibleVerse, 'number' | 'text'>
        )> }
      )> }
    ), sponsor: (
      { __typename?: 'BibleSponsor' }
      & Pick<BibleSponsor, 'name' | 'url'>
    ) }
  )> }
);

export type GetBibleBookDetailPathsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBibleBookDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { audiobibles: (
    { __typename?: 'BibleConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Bible' }
      & { books: Array<(
        { __typename?: 'BibleBook' }
        & Pick<BibleBook, 'id'>
      )> }
    )>> }
  ) }
);

export type GetVersionDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetVersionDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { audiobible: Maybe<(
    { __typename?: 'Bible' }
    & { books: Array<(
      { __typename?: 'BibleBook' }
      & Pick<BibleBook, 'id' | 'title' | 'chapterCount'>
    )> }
  )> }
);

export type GetVersionDetailPathDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVersionDetailPathDataQuery = (
  { __typename?: 'Query' }
  & { audiobibles: (
    { __typename?: 'BibleConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Bible' }
      & Pick<Bible, 'id'>
    )>> }
  ) }
);

export type GetBibleVersionsPageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBibleVersionsPageDataQuery = (
  { __typename?: 'Query' }
  & { audiobibles: (
    { __typename?: 'BibleConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Bible' }
      & Pick<Bible, 'title' | 'id'>
    )>> }
  ) }
);

export type GetConferenceDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetConferenceDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { conference: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id' | 'title' | 'startDate' | 'endDate'>
    & { sponsor: Maybe<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id' | 'title'>
    )>, recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & RecordingListFragment
        & WriteFeedFileFragment
      )>>, aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
);

export type GetConferenceDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetConferenceDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { conferences: (
    { __typename?: 'CollectionConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id'>
    )>> }
  ) }
);

export type GetConferenceListPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetConferenceListPageDataQuery = (
  { __typename?: 'Query' }
  & { conferences: (
    { __typename?: 'CollectionConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ), sponsor: Maybe<(
        { __typename?: 'Sponsor' }
        & Pick<Sponsor, 'title'>
      )> }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetConferenceListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetConferenceListPathsDataQuery = (
  { __typename?: 'Query' }
  & { conferences: (
    { __typename?: 'CollectionConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetDiscoverPageDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetDiscoverPageDataQuery = (
  { __typename?: 'Query' }
  & { sermons: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & CardSermonFragment
    )>> }
  ) }
);

export type GetHomeStaticPropsQueryVariables = Exact<{
  language: Language;
}>;


export type GetHomeStaticPropsQuery = (
  { __typename?: 'Query' }
  & { musicTracks: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & CardSongFragment
    )>> }
  ), audiobible: Maybe<(
    { __typename?: 'Bible' }
    & Pick<Bible, 'id' | 'title'>
    & { book: (
      { __typename?: 'BibleBook' }
      & Pick<BibleBook, 'title'>
      & { chapter: (
        { __typename?: 'BibleChapter' }
        & CardBibleChapterFragment
      ) }
    ) }
  )>, stories: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & CardStoryFragment
    )>> }
  ), tag: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & CardTopicFragment
    )>> }
  ), sermons: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & CardSermonFragment
    )>> }
  ), testimonies: (
    { __typename?: 'TestimonyConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Testimony' }
      & TestimoniesFragment
    )>> }
  ), blogPosts: (
    { __typename?: 'BlogPostConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'BlogPost' }
      & CardPostFragment
    )>> }
  ) }
);

export type GetPlaylistPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetPlaylistPageDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & { playlist: Maybe<(
        { __typename?: 'UserPlaylist' }
        & Pick<UserPlaylist, 'title'>
        & { recordings: (
          { __typename?: 'RecordingConnection' }
          & { nodes: Maybe<Array<(
            { __typename?: 'Recording' }
            & RecordingListFragment
          )>>, aggregate: Maybe<(
            { __typename?: 'Aggregate' }
            & Pick<Aggregate, 'count'>
          )> }
        ) }
      )> }
    ) }
  )> }
);

export type GetPlaylistsPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetPlaylistsPageDataQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'AuthenticatedUser' }
    & { user: (
      { __typename?: 'User' }
      & { playlists: (
        { __typename?: 'UserPlaylistConnection' }
        & { nodes: Maybe<Array<(
          { __typename?: 'UserPlaylist' }
          & Pick<UserPlaylist, 'id' | 'title'>
        )>>, aggregate: Maybe<(
          { __typename?: 'Aggregate' }
          & Pick<Aggregate, 'count'>
        )> }
      ) }
    ) }
  )> }
);

export type GetPresenterDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetPresenterDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { person: Maybe<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name' | 'summary' | 'description'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ), recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & WriteFeedFileFragment
        & RecordingListFragment
      )>>, aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
);

export type GetPresenterDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetPresenterDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { persons: (
    { __typename?: 'PersonConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id'>
    )>> }
  ) }
);

export type GetPresenterListPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetPresenterListPageDataQuery = (
  { __typename?: 'Query' }
  & { persons: (
    { __typename?: 'PersonConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name' | 'summary'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetPresenterListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetPresenterListPathsDataQuery = (
  { __typename?: 'Query' }
  & { persons: (
    { __typename?: 'PersonConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSeriesDetailDataQueryVariables = Exact<{
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSeriesDetailDataQuery = (
  { __typename?: 'Query' }
  & { series: Maybe<(
    { __typename?: 'Sequence' }
    & Pick<Sequence, 'title'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ), sponsor: Maybe<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id' | 'title'>
    )>, collection: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'title'>
    )>, recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & RecordingListFragment
        & WriteFeedFileFragment
      )>>, aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
);

export type GetSeriesDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSeriesDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { serieses: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id'>
    )>> }
  ) }
);

export type GetSeriesListPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSeriesListPageDataQuery = (
  { __typename?: 'Query' }
  & { serieses: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSeriesListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetSeriesListPathsDataQuery = (
  { __typename?: 'Query' }
  & { serieses: (
    { __typename?: 'SequenceConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSermonDetailDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSermonDetailDataQuery = (
  { __typename?: 'Query' }
  & { sermon: Maybe<(
    { __typename?: 'Recording' }
    & RecordingFragment
  )> }
);

export type GetSermonDetailStaticPathsQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSermonDetailStaticPathsQuery = (
  { __typename?: 'Query' }
  & { sermons: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & Pick<Recording, 'id'>
    )>> }
  ) }
);

export type GetSermonListStaticPropsQueryVariables = Exact<{
  language: Language;
  hasVideo: Maybe<Scalars['Boolean']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetSermonListStaticPropsQuery = (
  { __typename?: 'Query' }
  & { sermons: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & RecordingListFragment
      & WriteFeedFileFragment
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSermonListPagePathsDataQueryVariables = Exact<{
  language: Language;
  hasVideo: Maybe<Scalars['Boolean']>;
}>;


export type GetSermonListPagePathsDataQuery = (
  { __typename?: 'Query' }
  & { sermons: (
    { __typename?: 'RecordingConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSongAlbumPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSongAlbumPageDataQuery = (
  { __typename?: 'Query' }
  & { musicAlbum: Maybe<(
    { __typename?: 'Sequence' }
    & { recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & SongFragment
      )>> }
    ) }
  )> }
);

export type GetSongAlbumPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSongAlbumPathsDataQuery = (
  { __typename?: 'Query' }
  & { musicAlbums: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id'>
    )>> }
  ) }
);

export type GetSongBookPageDataQueryVariables = Exact<{
  language: Language;
  book: Scalars['String'];
}>;


export type GetSongBookPageDataQuery = (
  { __typename?: 'Query' }
  & { musicTracks: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & SongFragment
    )>> }
  ) }
);

export type SongFragment = (
  { __typename?: 'Recording' }
  & PlaylistFragment
  & RecordingFragment
);

export type GetSongSponsorPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSongSponsorPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & { recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & SongFragment
      )>> }
    ) }
  )> }
);

export type GetSongSponsorPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSongSponsorPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSongDetailTagPageDataQueryVariables = Exact<{
  language: Language;
  tag: Scalars['String'];
}>;


export type GetSongDetailTagPageDataQuery = (
  { __typename?: 'Query' }
  & { musicTracks: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & RecordingFragment
      & PlaylistFragment
    )>> }
  ) }
);

export type GetSongDetailTagPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSongDetailTagPathsDataQuery = (
  { __typename?: 'Query' }
  & { musicMoodTags: (
    { __typename?: 'TagConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'name'>
    )>> }
  ) }
);

export type GetSongsListPageDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetSongsListPageDataQuery = (
  { __typename?: 'Query' }
  & { musicAlbums: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ), sponsor: Maybe<(
        { __typename?: 'Sponsor' }
        & Pick<Sponsor, 'title'>
      )> }
    )>> }
  ), sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>> }
  ), musicMoodTags: (
    { __typename?: 'TagConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>> }
  ) }
);

export type GetSponsorAlbumsPageDataQueryVariables = Exact<{
  language: Language;
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorAlbumsPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'title'>
  )>, musicAlbums: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorAlbumsPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorAlbumsPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSponsorBooksPageDataQueryVariables = Exact<{
  language: Language;
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorBooksPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'id' | 'title'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ) }
  )>, audiobooks: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorBooksPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorBooksPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSponsorConferencesPageDataQueryVariables = Exact<{
  language: Language;
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorConferencesPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'title'>
  )>, conferences: (
    { __typename?: 'CollectionConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorConferencesPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorConferencesPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSponsorDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSponsorDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'id' | 'title' | 'location' | 'website' | 'summary' | 'description'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ) }
  )> }
);

export type GetSponsorDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSponsorListPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorListPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetSponsorListPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorSeriesPageDataQueryVariables = Exact<{
  language: Language;
  id: Scalars['ID'];
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetSponsorSeriesPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'title'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ) }
  )>, serieses: (
    { __typename?: 'SequenceConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sequence' }
      & Pick<Sequence, 'id' | 'title'>
      & { imageWithFallback: (
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      ) }
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetSponsorSeriesPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorSeriesPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetSponsorTeachingsPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorTeachingsPageDataQuery = (
  { __typename?: 'Query' }
  & { sponsor: Maybe<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'id' | 'title'>
    & { imageWithFallback: (
      { __typename?: 'Image' }
      & Pick<Image, 'url'>
    ), recordings: (
      { __typename?: 'RecordingConnection' }
      & { nodes: Maybe<Array<(
        { __typename?: 'Recording' }
        & RecordingListFragment
        & WriteFeedFileFragment
      )>>, aggregate: Maybe<(
        { __typename?: 'Aggregate' }
        & Pick<Aggregate, 'count'>
      )> }
    ) }
  )> }
);

export type GetSponsorTeachingsPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetSponsorTeachingsPathsDataQuery = (
  { __typename?: 'Query' }
  & { sponsors: (
    { __typename?: 'SponsorConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Sponsor' }
      & Pick<Sponsor, 'id'>
    )>> }
  ) }
);

export type GetStoriesPageDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetStoriesPageDataQuery = (
  { __typename?: 'Query' }
  & { stories: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & RecordingListFragment
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetStoriesPathDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetStoriesPathDataQuery = (
  { __typename?: 'Query' }
  & { stories: (
    { __typename?: 'RecordingConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetStoryDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetStoryDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { story: Maybe<(
    { __typename?: 'Recording' }
    & Pick<Recording, 'id'>
    & { sequence: Maybe<(
      { __typename?: 'Sequence' }
      & { recordings: (
        { __typename?: 'RecordingConnection' }
        & { nodes: Maybe<Array<(
          { __typename?: 'Recording' }
          & RecordingFragment
          & PlaylistFragment
        )>> }
      ) }
    )> }
  )> }
);

export type GetStoryDetailPathsDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetStoryDetailPathsDataQuery = (
  { __typename?: 'Query' }
  & { stories: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & Pick<Recording, 'id'>
    )>> }
  ) }
);

export type GetTagDetailPageDataQueryVariables = Exact<{
  language: Language;
  tagName: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetTagDetailPageDataQuery = (
  { __typename?: 'Query' }
  & { recordings: (
    { __typename?: 'RecordingConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Recording' }
      & RecordingListFragment
      & WriteFeedFileFragment
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetTagDetailPathsQueryQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
}>;


export type GetTagDetailPathsQueryQuery = (
  { __typename?: 'Query' }
  & { tags: (
    { __typename?: 'TagConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'name'>
    )>> }
  ) }
);

export type GetTagListPageDataQueryVariables = Exact<{
  language: Language;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type GetTagListPageDataQuery = (
  { __typename?: 'Query' }
  & { tags: (
    { __typename?: 'TagConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetTagListPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetTagListPathsDataQuery = (
  { __typename?: 'Query' }
  & { tags: (
    { __typename?: 'TagConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetTestimoniesPageDataQueryVariables = Exact<{
  language: Language;
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
}>;


export type GetTestimoniesPageDataQuery = (
  { __typename?: 'Query' }
  & { testimonies: (
    { __typename?: 'TestimonyConnection' }
    & { nodes: Maybe<Array<(
      { __typename?: 'Testimony' }
      & Pick<Testimony, 'author' | 'body' | 'writtenDate'>
    )>>, aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type GetTestimoniesPathsDataQueryVariables = Exact<{
  language: Language;
}>;


export type GetTestimoniesPathsDataQuery = (
  { __typename?: 'Query' }
  & { testimonies: (
    { __typename?: 'TestimonyConnection' }
    & { aggregate: Maybe<(
      { __typename?: 'Aggregate' }
      & Pick<Aggregate, 'count'>
    )> }
  ) }
);

export type AddPlaylistMutationVariables = Exact<{
  language: Language;
  title: Scalars['String'];
  isPublic: Scalars['Boolean'];
  recordingIds: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type AddPlaylistMutation = (
  { __typename?: 'Mutation' }
  & { playlistAdd: (
    { __typename?: 'UserPlaylist' }
    & Pick<UserPlaylist, 'id'>
  ) }
);

export type WriteFeedFileFragment = (
  { __typename?: 'Recording' }
  & Pick<Recording, 'title' | 'description' | 'canonicalUrl' | 'recordingDate'>
  & { audioFiles: Array<(
    { __typename?: 'AudioFile' }
    & Pick<AudioFile, 'url' | 'filesize'>
  )>, feedVideoFiles: Array<(
    { __typename?: 'VideoFile' }
    & Pick<VideoFile, 'url' | 'filesize'>
  )> }
);

export const CardBibleChapterFragmentDoc = `
    fragment cardBibleChapter on BibleChapter {
  id
  title
  url
}
    `;
export const CardPostFragmentDoc = `
    fragment cardPost on BlogPost {
  image {
    url(size: 500, cropMode: MAX_SIZE)
  }
  publishDate
  title
  teaser
  canonicalUrl
  readingDuration
}
    `;
export const SpeakerNameFragmentDoc = `
    fragment speakerName on Person {
  id
  name
  imageWithFallback {
    url(size: 100)
  }
  summary
  website
  viewerHasFavorited
}
    `;
export const AndMiniplayerFragmentDoc = `
    fragment andMiniplayer on Recording {
  id
  title
  duration
  sequence {
    title
  }
  audioFiles {
    url
    filesize
    mimeType
  }
  videoFiles(allowedContainers: [M4A, M4V, MOV, MP4]) {
    url
    filesize
    mimeType
  }
  videoStreams: videoFiles(allowedContainers: [M3U8_WEB]) {
    url
    filesize
    mimeType
  }
}
    `;
export const ProgressBarFragmentDoc = `
    fragment progressBar on Recording {
  id
  ...andMiniplayer
}
    ${AndMiniplayerFragmentDoc}`;
export const CardPlayableFragmentDoc = `
    fragment cardPlayable on Recording {
  ...progressBar
}
    ${ProgressBarFragmentDoc}`;
export const CardSermonFragmentDoc = `
    fragment cardSermon on Recording {
  id
  title
  duration
  persons {
    ...speakerName
  }
  sequence {
    title
    recordings {
      aggregate {
        count
      }
    }
  }
  ...cardPlayable
}
    ${SpeakerNameFragmentDoc}
${CardPlayableFragmentDoc}`;
export const CardSongFragmentDoc = `
    fragment cardSong on Recording {
  title
  persons {
    ...speakerName
  }
  duration
  sequence {
    id
    title
  }
  ...cardPlayable
}
    ${SpeakerNameFragmentDoc}
${CardPlayableFragmentDoc}`;
export const CardStoryFragmentDoc = `
    fragment cardStory on Recording {
  title
  duration
  persons(role: SPEAKER) {
    ...speakerName
  }
  sequence {
    title
    recordings {
      aggregate {
        count
      }
    }
  }
  ...cardPlayable
}
    ${SpeakerNameFragmentDoc}
${CardPlayableFragmentDoc}`;
export const CardTopicFragmentDoc = `
    fragment cardTopic on Recording {
  title
  duration
  persons {
    ...speakerName
  }
  ...cardPlayable
}
    ${SpeakerNameFragmentDoc}
${CardPlayableFragmentDoc}`;
export const CopyrightInfoFragmentDoc = `
    fragment copyrightInfo on Recording {
  copyrightYear
  distributionAgreement {
    sponsor {
      title
    }
    license {
      summary
      image {
        url(size: 100, cropMode: MAX_SIZE)
      }
    }
  }
  sponsor {
    title
  }
}
    `;
export const CopyrightInfosFragmentDoc = `
    fragment copyrightInfos on Recording {
  id
  copyrightYear
  distributionAgreement {
    id
  }
  sponsor {
    id
  }
  ...copyrightInfo
}
    ${CopyrightInfoFragmentDoc}`;
export const MediaFormatSwitcherFragmentDoc = `
    fragment mediaFormatSwitcher on Recording {
  ...andMiniplayer
}
    ${AndMiniplayerFragmentDoc}`;
export const PlaybackTimesFragmentDoc = `
    fragment playbackTimes on Recording {
  ...andMiniplayer
}
    ${AndMiniplayerFragmentDoc}`;
export const RecordingListFragmentDoc = `
    fragment recordingList on Recording {
  id
  title
  description
  duration
  imageWithFallback {
    url(size: 50)
  }
  persons {
    ...speakerName
  }
  hasVideo
  recordingDate
  canonicalUrl
}
    ${SpeakerNameFragmentDoc}`;
export const TestimoniesFragmentDoc = `
    fragment testimonies on Testimony {
  id
  body
  author
}
    `;
export const ProfileFragmentDoc = `
    fragment profile on User {
  email
  givenName
  surname
  address1
  address2
  city
  province
  postalCode
  country
}
    `;
export const PlaylistFragmentDoc = `
    fragment playlist on Recording {
  id
  title
  audioDownloads: audioFiles(allowedContainers: MP3) {
    url
    filesize
  }
  ...andMiniplayer
}
    ${AndMiniplayerFragmentDoc}`;
export const SponsorInfoFragmentDoc = `
    fragment sponsorInfo on Sponsor {
  id
  title
}
    `;
export const ButtonPlayFragmentDoc = `
    fragment buttonPlay on Recording {
  ...andMiniplayer
}
    ${AndMiniplayerFragmentDoc}`;
export const TeaseRecordingFragmentDoc = `
    fragment teaseRecording on Recording {
  ...buttonPlay
}
    ${ButtonPlayFragmentDoc}`;
export const ButtonDownloadFragmentDoc = `
    fragment buttonDownload on Recording {
  videoDownloads: videoFiles(allowedContainers: MP4) {
    id
    url
    filesize
  }
  audioDownloads: audioFiles(allowedContainers: MP3) {
    id
    url
    filesize
  }
}
    `;
export const PlayerFragmentDoc = `
    fragment player on Recording {
  id
  title
  ...andMiniplayer
  ...buttonDownload
  ...progressBar
}
    ${AndMiniplayerFragmentDoc}
${ButtonDownloadFragmentDoc}
${ProgressBarFragmentDoc}`;
export const RecordingFragmentDoc = `
    fragment recording on Recording {
  id
  title
  persons {
    ...speakerName
  }
  videoDownloads: videoFiles(allowedContainers: MP4) {
    id
    url
    filesize
  }
  audioDownloads: audioFiles(allowedContainers: MP3) {
    id
    url
    filesize
  }
  description
  imageWithFallback {
    url(size: 50)
  }
  recordingDate
  recordingTags {
    nodes {
      tag {
        id
        name
      }
    }
  }
  sponsor {
    ...sponsorInfo
  }
  sequence {
    id
    title
    recordings(first: 1000) {
      nodes {
        id
        ...teaseRecording
      }
    }
  }
  sequenceIndex
  transcript {
    text
  }
  shareUrl
  ...copyrightInfo
  ...player
}
    ${SpeakerNameFragmentDoc}
${SponsorInfoFragmentDoc}
${TeaseRecordingFragmentDoc}
${CopyrightInfoFragmentDoc}
${PlayerFragmentDoc}`;
export const SongFragmentDoc = `
    fragment song on Recording {
  ...playlist
  ...recording
}
    ${PlaylistFragmentDoc}
${RecordingFragmentDoc}`;
export const WriteFeedFileFragmentDoc = `
    fragment writeFeedFile on Recording {
  title
  description
  canonicalUrl
  recordingDate
  audioFiles {
    url
    filesize
  }
  feedVideoFiles: videoFiles {
    url
    filesize
  }
}
    `;
export const GetWithAuthGuardDataDocument = `
    query getWithAuthGuardData {
  me {
    user {
      email
    }
  }
}
    `;
export const useGetWithAuthGuardDataQuery = <
      TData = GetWithAuthGuardDataQuery,
      TError = unknown
    >(
      variables?: GetWithAuthGuardDataQueryVariables, 
      options?: UseQueryOptions<GetWithAuthGuardDataQuery, TError, TData>
    ) => 
    useQuery<GetWithAuthGuardDataQuery, TError, TData>(
      ['getWithAuthGuardData', variables],
      graphqlFetcher<GetWithAuthGuardDataQuery, GetWithAuthGuardDataQueryVariables>(GetWithAuthGuardDataDocument, variables),
      options
    );
export const LoginForgotPasswordDocument = `
    mutation loginForgotPassword($email: String!) {
  userRecover(email: $email) {
    errors {
      message
    }
    success
  }
}
    `;
export const useLoginForgotPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginForgotPasswordMutation, TError, LoginForgotPasswordMutationVariables, TContext>) => 
    useMutation<LoginForgotPasswordMutation, TError, LoginForgotPasswordMutationVariables, TContext>(
      (variables?: LoginForgotPasswordMutationVariables) => graphqlFetcher<LoginForgotPasswordMutation, LoginForgotPasswordMutationVariables>(LoginForgotPasswordDocument, variables)(),
      options
    );
export const GetPlaylistButtonDataDocument = `
    query getPlaylistButtonData($language: Language!, $recordingId: ID!) {
  me {
    user {
      playlists(language: $language) {
        nodes {
          id
          title
          hasRecording(id: $recordingId)
        }
      }
    }
  }
}
    `;
export const useGetPlaylistButtonDataQuery = <
      TData = GetPlaylistButtonDataQuery,
      TError = unknown
    >(
      variables: GetPlaylistButtonDataQueryVariables, 
      options?: UseQueryOptions<GetPlaylistButtonDataQuery, TError, TData>
    ) => 
    useQuery<GetPlaylistButtonDataQuery, TError, TData>(
      ['getPlaylistButtonData', variables],
      graphqlFetcher<GetPlaylistButtonDataQuery, GetPlaylistButtonDataQueryVariables>(GetPlaylistButtonDataDocument, variables),
      options
    );
export const GetAccountPlaylistsPageDataDocument = `
    query getAccountPlaylistsPageData($language: Language!) {
  me {
    user {
      playlists(language: $language) {
        nodes {
          id
          title
          isPublic
          summary
          recordings {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetAccountPlaylistsPageDataQuery = <
      TData = GetAccountPlaylistsPageDataQuery,
      TError = unknown
    >(
      variables: GetAccountPlaylistsPageDataQueryVariables, 
      options?: UseQueryOptions<GetAccountPlaylistsPageDataQuery, TError, TData>
    ) => 
    useQuery<GetAccountPlaylistsPageDataQuery, TError, TData>(
      ['getAccountPlaylistsPageData', variables],
      graphqlFetcher<GetAccountPlaylistsPageDataQuery, GetAccountPlaylistsPageDataQueryVariables>(GetAccountPlaylistsPageDataDocument, variables),
      options
    );
export const AddAccountPlaylistDocument = `
    mutation addAccountPlaylist($isPublic: Boolean!, $language: Language!, $recordingIds: [ID!], $summary: String, $title: String!) {
  playlistAdd(
    input: {isPublic: $isPublic, language: $language, recordingIds: $recordingIds, summary: $summary, title: $title}
  ) {
    id
  }
}
    `;
export const useAddAccountPlaylistMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddAccountPlaylistMutation, TError, AddAccountPlaylistMutationVariables, TContext>) => 
    useMutation<AddAccountPlaylistMutation, TError, AddAccountPlaylistMutationVariables, TContext>(
      (variables?: AddAccountPlaylistMutationVariables) => graphqlFetcher<AddAccountPlaylistMutation, AddAccountPlaylistMutationVariables>(AddAccountPlaylistDocument, variables)(),
      options
    );
export const GetProfileDataDocument = `
    query getProfileData {
  me {
    user {
      ...profile
    }
  }
}
    ${ProfileFragmentDoc}`;
export const useGetProfileDataQuery = <
      TData = GetProfileDataQuery,
      TError = unknown
    >(
      variables?: GetProfileDataQueryVariables, 
      options?: UseQueryOptions<GetProfileDataQuery, TError, TData>
    ) => 
    useQuery<GetProfileDataQuery, TError, TData>(
      ['getProfileData', variables],
      graphqlFetcher<GetProfileDataQuery, GetProfileDataQueryVariables>(GetProfileDataDocument, variables),
      options
    );
export const UpdateProfileDataDocument = `
    mutation updateProfileData($email: String, $password: String, $givenName: String, $surname: String, $address1: String, $address2: String, $city: String, $province: String, $postalCode: String, $country: String) {
  updateMyProfile(
    input: {email: $email, password: $password, givenName: $givenName, surname: $surname, address1: $address1, address2: $address2, city: $city, province: $province, postalCode: $postalCode, country: $country}
  ) {
    errors {
      message
    }
    authenticatedUser {
      user {
        ...profile
      }
    }
  }
}
    ${ProfileFragmentDoc}`;
export const useUpdateProfileDataMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateProfileDataMutation, TError, UpdateProfileDataMutationVariables, TContext>) => 
    useMutation<UpdateProfileDataMutation, TError, UpdateProfileDataMutationVariables, TContext>(
      (variables?: UpdateProfileDataMutationVariables) => graphqlFetcher<UpdateProfileDataMutation, UpdateProfileDataMutationVariables>(UpdateProfileDataDocument, variables)(),
      options
    );
export const RegisterDocument = `
    mutation register($email: String!, $password: String!) {
  signup(input: {email: $email, password: $password}) {
    errors {
      message
    }
  }
}
    `;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>) => 
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      (variables?: RegisterMutationVariables) => graphqlFetcher<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables)(),
      options
    );
export const RegisterSocialDocument = `
    mutation registerSocial($socialId: String!, $socialName: UserSocialServiceName!, $socialToken: String!, $givenName: String, $surname: String) {
  loginSocial(
    input: {socialId: $socialId, socialName: $socialName, socialToken: $socialToken, givenName: $givenName, surname: $surname}
  ) {
    authenticatedUser {
      sessionToken
    }
    errors {
      message
    }
  }
}
    `;
export const useRegisterSocialMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RegisterSocialMutation, TError, RegisterSocialMutationVariables, TContext>) => 
    useMutation<RegisterSocialMutation, TError, RegisterSocialMutationVariables, TContext>(
      (variables?: RegisterSocialMutationVariables) => graphqlFetcher<RegisterSocialMutation, RegisterSocialMutationVariables>(RegisterSocialDocument, variables)(),
      options
    );
export const RegisterIsLoggedInDocument = `
    query registerIsLoggedIn {
  me {
    user {
      email
    }
  }
}
    `;
export const useRegisterIsLoggedInQuery = <
      TData = RegisterIsLoggedInQuery,
      TError = unknown
    >(
      variables?: RegisterIsLoggedInQueryVariables, 
      options?: UseQueryOptions<RegisterIsLoggedInQuery, TError, TData>
    ) => 
    useQuery<RegisterIsLoggedInQuery, TError, TData>(
      ['registerIsLoggedIn', variables],
      graphqlFetcher<RegisterIsLoggedInQuery, RegisterIsLoggedInQueryVariables>(RegisterIsLoggedInDocument, variables),
      options
    );
export const ResetPasswordDocument = `
    mutation resetPassword($token: String!, $password: String!) {
  userReset(password: $password, token: $token) {
    errors {
      message
    }
    success
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>) => 
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      (variables?: ResetPasswordMutationVariables) => graphqlFetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, variables)(),
      options
    );
export const GetAudiobookDetailPageDataDocument = `
    query getAudiobookDetailPageData($id: ID!) {
  audiobook(id: $id) {
    title
    sponsor {
      title
      ...sponsorInfo
    }
    recordings {
      nodes {
        id
        title
        ...copyrightInfos
        ...writeFeedFile
        ...player
        ...playlist
      }
    }
    shareUrl
  }
}
    ${SponsorInfoFragmentDoc}
${CopyrightInfosFragmentDoc}
${WriteFeedFileFragmentDoc}
${PlayerFragmentDoc}
${PlaylistFragmentDoc}`;
export const useGetAudiobookDetailPageDataQuery = <
      TData = GetAudiobookDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetAudiobookDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetAudiobookDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetAudiobookDetailPageDataQuery, TError, TData>(
      ['getAudiobookDetailPageData', variables],
      graphqlFetcher<GetAudiobookDetailPageDataQuery, GetAudiobookDetailPageDataQueryVariables>(GetAudiobookDetailPageDataDocument, variables),
      options
    );
export const GetAudiobookDetailPathsDataDocument = `
    query getAudiobookDetailPathsData($language: Language!, $first: Int) {
  audiobooks(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetAudiobookDetailPathsDataQuery = <
      TData = GetAudiobookDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetAudiobookDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetAudiobookDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetAudiobookDetailPathsDataQuery, TError, TData>(
      ['getAudiobookDetailPathsData', variables],
      graphqlFetcher<GetAudiobookDetailPathsDataQuery, GetAudiobookDetailPathsDataQueryVariables>(GetAudiobookDetailPathsDataDocument, variables),
      options
    );
export const GetAudiobookListPageDataDocument = `
    query getAudiobookListPageData($language: Language!, $first: Int, $offset: Int) {
  audiobooks(language: $language, first: $first, offset: $offset) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetAudiobookListPageDataQuery = <
      TData = GetAudiobookListPageDataQuery,
      TError = unknown
    >(
      variables: GetAudiobookListPageDataQueryVariables, 
      options?: UseQueryOptions<GetAudiobookListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetAudiobookListPageDataQuery, TError, TData>(
      ['getAudiobookListPageData', variables],
      graphqlFetcher<GetAudiobookListPageDataQuery, GetAudiobookListPageDataQueryVariables>(GetAudiobookListPageDataDocument, variables),
      options
    );
export const GetAudiobookListPathsDataDocument = `
    query getAudiobookListPathsData($language: Language!) {
  audiobooks(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetAudiobookListPathsDataQuery = <
      TData = GetAudiobookListPathsDataQuery,
      TError = unknown
    >(
      variables: GetAudiobookListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetAudiobookListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetAudiobookListPathsDataQuery, TError, TData>(
      ['getAudiobookListPathsData', variables],
      graphqlFetcher<GetAudiobookListPathsDataQuery, GetAudiobookListPathsDataQueryVariables>(GetAudiobookListPathsDataDocument, variables),
      options
    );
export const GetBibleBookDetailPageDataDocument = `
    query getBibleBookDetailPageData($versionId: ID!, $bookId: ID!) {
  audiobible(id: $versionId) {
    title
    book(id: $bookId) {
      title
      shareUrl
      chapters {
        id
        title
        url
        verses {
          number
          text
        }
      }
    }
    sponsor {
      name
      url
    }
    copyrightText
  }
}
    `;
export const useGetBibleBookDetailPageDataQuery = <
      TData = GetBibleBookDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetBibleBookDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetBibleBookDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetBibleBookDetailPageDataQuery, TError, TData>(
      ['getBibleBookDetailPageData', variables],
      graphqlFetcher<GetBibleBookDetailPageDataQuery, GetBibleBookDetailPageDataQueryVariables>(GetBibleBookDetailPageDataDocument, variables),
      options
    );
export const GetBibleBookDetailPathsDataDocument = `
    query getBibleBookDetailPathsData {
  audiobibles {
    nodes {
      books {
        id
      }
    }
  }
}
    `;
export const useGetBibleBookDetailPathsDataQuery = <
      TData = GetBibleBookDetailPathsDataQuery,
      TError = unknown
    >(
      variables?: GetBibleBookDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetBibleBookDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetBibleBookDetailPathsDataQuery, TError, TData>(
      ['getBibleBookDetailPathsData', variables],
      graphqlFetcher<GetBibleBookDetailPathsDataQuery, GetBibleBookDetailPathsDataQueryVariables>(GetBibleBookDetailPathsDataDocument, variables),
      options
    );
export const GetVersionDetailPageDataDocument = `
    query getVersionDetailPageData($id: ID!) {
  audiobible(id: $id) {
    books {
      id
      title
      chapterCount
    }
  }
}
    `;
export const useGetVersionDetailPageDataQuery = <
      TData = GetVersionDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetVersionDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetVersionDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetVersionDetailPageDataQuery, TError, TData>(
      ['getVersionDetailPageData', variables],
      graphqlFetcher<GetVersionDetailPageDataQuery, GetVersionDetailPageDataQueryVariables>(GetVersionDetailPageDataDocument, variables),
      options
    );
export const GetVersionDetailPathDataDocument = `
    query getVersionDetailPathData {
  audiobibles {
    nodes {
      id
    }
  }
}
    `;
export const useGetVersionDetailPathDataQuery = <
      TData = GetVersionDetailPathDataQuery,
      TError = unknown
    >(
      variables?: GetVersionDetailPathDataQueryVariables, 
      options?: UseQueryOptions<GetVersionDetailPathDataQuery, TError, TData>
    ) => 
    useQuery<GetVersionDetailPathDataQuery, TError, TData>(
      ['getVersionDetailPathData', variables],
      graphqlFetcher<GetVersionDetailPathDataQuery, GetVersionDetailPathDataQueryVariables>(GetVersionDetailPathDataDocument, variables),
      options
    );
export const GetBibleVersionsPageDataDocument = `
    query getBibleVersionsPageData {
  audiobibles {
    nodes {
      title
      id
    }
  }
}
    `;
export const useGetBibleVersionsPageDataQuery = <
      TData = GetBibleVersionsPageDataQuery,
      TError = unknown
    >(
      variables?: GetBibleVersionsPageDataQueryVariables, 
      options?: UseQueryOptions<GetBibleVersionsPageDataQuery, TError, TData>
    ) => 
    useQuery<GetBibleVersionsPageDataQuery, TError, TData>(
      ['getBibleVersionsPageData', variables],
      graphqlFetcher<GetBibleVersionsPageDataQuery, GetBibleVersionsPageDataQueryVariables>(GetBibleVersionsPageDataDocument, variables),
      options
    );
export const GetConferenceDetailPageDataDocument = `
    query getConferenceDetailPageData($id: ID!, $offset: Int, $first: Int) {
  conference(id: $id) {
    id
    title
    startDate
    endDate
    sponsor {
      id
      title
    }
    recordings(offset: $offset, first: $first) {
      nodes {
        ...recordingList
        ...writeFeedFile
      }
      aggregate {
        count
      }
    }
  }
}
    ${RecordingListFragmentDoc}
${WriteFeedFileFragmentDoc}`;
export const useGetConferenceDetailPageDataQuery = <
      TData = GetConferenceDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetConferenceDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetConferenceDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetConferenceDetailPageDataQuery, TError, TData>(
      ['getConferenceDetailPageData', variables],
      graphqlFetcher<GetConferenceDetailPageDataQuery, GetConferenceDetailPageDataQueryVariables>(GetConferenceDetailPageDataDocument, variables),
      options
    );
export const GetConferenceDetailPathsDataDocument = `
    query getConferenceDetailPathsData($language: Language!, $first: Int) {
  conferences(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetConferenceDetailPathsDataQuery = <
      TData = GetConferenceDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetConferenceDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetConferenceDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetConferenceDetailPathsDataQuery, TError, TData>(
      ['getConferenceDetailPathsData', variables],
      graphqlFetcher<GetConferenceDetailPathsDataQuery, GetConferenceDetailPathsDataQueryVariables>(GetConferenceDetailPathsDataDocument, variables),
      options
    );
export const GetConferenceListPageDataDocument = `
    query getConferenceListPageData($language: Language!, $offset: Int, $first: Int) {
  conferences(language: $language, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
      sponsor {
        title
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetConferenceListPageDataQuery = <
      TData = GetConferenceListPageDataQuery,
      TError = unknown
    >(
      variables: GetConferenceListPageDataQueryVariables, 
      options?: UseQueryOptions<GetConferenceListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetConferenceListPageDataQuery, TError, TData>(
      ['getConferenceListPageData', variables],
      graphqlFetcher<GetConferenceListPageDataQuery, GetConferenceListPageDataQueryVariables>(GetConferenceListPageDataDocument, variables),
      options
    );
export const GetConferenceListPathsDataDocument = `
    query getConferenceListPathsData($language: Language!) {
  conferences(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetConferenceListPathsDataQuery = <
      TData = GetConferenceListPathsDataQuery,
      TError = unknown
    >(
      variables: GetConferenceListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetConferenceListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetConferenceListPathsDataQuery, TError, TData>(
      ['getConferenceListPathsData', variables],
      graphqlFetcher<GetConferenceListPathsDataQuery, GetConferenceListPathsDataQueryVariables>(GetConferenceListPathsDataDocument, variables),
      options
    );
export const GetDiscoverPageDataDocument = `
    query getDiscoverPageData($language: Language!) {
  sermons(language: $language, orderBy: {field: PUBLISHED_AT, direction: DESC}) {
    nodes {
      ...cardSermon
    }
  }
}
    ${CardSermonFragmentDoc}`;
export const useGetDiscoverPageDataQuery = <
      TData = GetDiscoverPageDataQuery,
      TError = unknown
    >(
      variables: GetDiscoverPageDataQueryVariables, 
      options?: UseQueryOptions<GetDiscoverPageDataQuery, TError, TData>
    ) => 
    useQuery<GetDiscoverPageDataQuery, TError, TData>(
      ['getDiscoverPageData', variables],
      graphqlFetcher<GetDiscoverPageDataQuery, GetDiscoverPageDataQueryVariables>(GetDiscoverPageDataDocument, variables),
      options
    );
export const GetHomeStaticPropsDocument = `
    query getHomeStaticProps($language: Language!) {
  musicTracks(
    language: $language
    first: 1
    orderBy: {field: PUBLISHED_AT, direction: DESC}
  ) {
    nodes {
      ...cardSong
    }
  }
  audiobible(id: "ENGKJVC") {
    id
    title
    book(id: "ENGKJVC-Gen") {
      title
      chapter(id: "ENGKJVC-Gen-1") {
        ...cardBibleChapter
      }
    }
  }
  stories(
    language: $language
    first: 1
    orderBy: {field: PUBLISHED_AT, direction: DESC}
  ) {
    nodes {
      ...cardStory
    }
  }
  tag: recordings(
    language: $language
    tagName: "Family"
    first: 1
    orderBy: {field: PUBLISHED_AT, direction: DESC}
  ) {
    nodes {
      ...cardTopic
    }
  }
  sermons(
    language: $language
    first: 1
    orderBy: {field: PUBLISHED_AT, direction: DESC}
  ) {
    nodes {
      ...cardSermon
    }
  }
  testimonies(language: $language, first: 3) {
    nodes {
      ...testimonies
    }
  }
  blogPosts(
    language: $language
    first: 2
    orderBy: {field: PUBLISHED_AT, direction: DESC}
  ) {
    nodes {
      ...cardPost
    }
  }
}
    ${CardSongFragmentDoc}
${CardBibleChapterFragmentDoc}
${CardStoryFragmentDoc}
${CardTopicFragmentDoc}
${CardSermonFragmentDoc}
${TestimoniesFragmentDoc}
${CardPostFragmentDoc}`;
export const useGetHomeStaticPropsQuery = <
      TData = GetHomeStaticPropsQuery,
      TError = unknown
    >(
      variables: GetHomeStaticPropsQueryVariables, 
      options?: UseQueryOptions<GetHomeStaticPropsQuery, TError, TData>
    ) => 
    useQuery<GetHomeStaticPropsQuery, TError, TData>(
      ['getHomeStaticProps', variables],
      graphqlFetcher<GetHomeStaticPropsQuery, GetHomeStaticPropsQueryVariables>(GetHomeStaticPropsDocument, variables),
      options
    );
export const GetPlaylistPageDataDocument = `
    query getPlaylistPageData($id: ID!, $offset: Int, $first: Int) {
  me {
    user {
      playlist(id: $id) {
        title
        recordings(offset: $offset, first: $first) {
          nodes {
            ...recordingList
          }
          aggregate {
            count
          }
        }
      }
    }
  }
}
    ${RecordingListFragmentDoc}`;
export const useGetPlaylistPageDataQuery = <
      TData = GetPlaylistPageDataQuery,
      TError = unknown
    >(
      variables: GetPlaylistPageDataQueryVariables, 
      options?: UseQueryOptions<GetPlaylistPageDataQuery, TError, TData>
    ) => 
    useQuery<GetPlaylistPageDataQuery, TError, TData>(
      ['getPlaylistPageData', variables],
      graphqlFetcher<GetPlaylistPageDataQuery, GetPlaylistPageDataQueryVariables>(GetPlaylistPageDataDocument, variables),
      options
    );
export const GetPlaylistsPageDataDocument = `
    query getPlaylistsPageData($language: Language!, $offset: Int, $first: Int) {
  me {
    user {
      playlists(language: $language, offset: $offset, first: $first) {
        nodes {
          id
          title
        }
        aggregate {
          count
        }
      }
    }
  }
}
    `;
export const useGetPlaylistsPageDataQuery = <
      TData = GetPlaylistsPageDataQuery,
      TError = unknown
    >(
      variables: GetPlaylistsPageDataQueryVariables, 
      options?: UseQueryOptions<GetPlaylistsPageDataQuery, TError, TData>
    ) => 
    useQuery<GetPlaylistsPageDataQuery, TError, TData>(
      ['getPlaylistsPageData', variables],
      graphqlFetcher<GetPlaylistsPageDataQuery, GetPlaylistsPageDataQueryVariables>(GetPlaylistsPageDataDocument, variables),
      options
    );
export const GetPresenterDetailPageDataDocument = `
    query getPresenterDetailPageData($id: ID!, $offset: Int, $first: Int) {
  person(id: $id) {
    id
    name
    summary
    description
    imageWithFallback {
      url(size: 100)
    }
    recordings(offset: $offset, first: $first) {
      nodes {
        ...writeFeedFile
        ...recordingList
      }
      aggregate {
        count
      }
    }
  }
}
    ${WriteFeedFileFragmentDoc}
${RecordingListFragmentDoc}`;
export const useGetPresenterDetailPageDataQuery = <
      TData = GetPresenterDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetPresenterDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetPresenterDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetPresenterDetailPageDataQuery, TError, TData>(
      ['getPresenterDetailPageData', variables],
      graphqlFetcher<GetPresenterDetailPageDataQuery, GetPresenterDetailPageDataQueryVariables>(GetPresenterDetailPageDataDocument, variables),
      options
    );
export const GetPresenterDetailPathsDataDocument = `
    query getPresenterDetailPathsData($language: Language!, $first: Int) {
  persons(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetPresenterDetailPathsDataQuery = <
      TData = GetPresenterDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetPresenterDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetPresenterDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetPresenterDetailPathsDataQuery, TError, TData>(
      ['getPresenterDetailPathsData', variables],
      graphqlFetcher<GetPresenterDetailPathsDataQuery, GetPresenterDetailPathsDataQueryVariables>(GetPresenterDetailPathsDataDocument, variables),
      options
    );
export const GetPresenterListPageDataDocument = `
    query getPresenterListPageData($language: Language!, $offset: Int, $first: Int) {
  persons(language: $language, offset: $offset, first: $first) {
    nodes {
      id
      name
      summary
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetPresenterListPageDataQuery = <
      TData = GetPresenterListPageDataQuery,
      TError = unknown
    >(
      variables: GetPresenterListPageDataQueryVariables, 
      options?: UseQueryOptions<GetPresenterListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetPresenterListPageDataQuery, TError, TData>(
      ['getPresenterListPageData', variables],
      graphqlFetcher<GetPresenterListPageDataQuery, GetPresenterListPageDataQueryVariables>(GetPresenterListPageDataDocument, variables),
      options
    );
export const GetPresenterListPathsDataDocument = `
    query getPresenterListPathsData($language: Language!) {
  persons(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetPresenterListPathsDataQuery = <
      TData = GetPresenterListPathsDataQuery,
      TError = unknown
    >(
      variables: GetPresenterListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetPresenterListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetPresenterListPathsDataQuery, TError, TData>(
      ['getPresenterListPathsData', variables],
      graphqlFetcher<GetPresenterListPathsDataQuery, GetPresenterListPathsDataQueryVariables>(GetPresenterListPathsDataDocument, variables),
      options
    );
export const GetSeriesDetailDataDocument = `
    query getSeriesDetailData($id: ID!, $offset: Int, $first: Int) {
  series(id: $id) {
    title
    imageWithFallback {
      url(size: 100)
    }
    sponsor {
      id
      title
    }
    collection {
      id
      title
    }
    recordings(offset: $offset, first: $first) {
      nodes {
        ...recordingList
        ...writeFeedFile
      }
      aggregate {
        count
      }
    }
  }
}
    ${RecordingListFragmentDoc}
${WriteFeedFileFragmentDoc}`;
export const useGetSeriesDetailDataQuery = <
      TData = GetSeriesDetailDataQuery,
      TError = unknown
    >(
      variables: GetSeriesDetailDataQueryVariables, 
      options?: UseQueryOptions<GetSeriesDetailDataQuery, TError, TData>
    ) => 
    useQuery<GetSeriesDetailDataQuery, TError, TData>(
      ['getSeriesDetailData', variables],
      graphqlFetcher<GetSeriesDetailDataQuery, GetSeriesDetailDataQueryVariables>(GetSeriesDetailDataDocument, variables),
      options
    );
export const GetSeriesDetailPathsDataDocument = `
    query getSeriesDetailPathsData($language: Language!, $first: Int) {
  serieses(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSeriesDetailPathsDataQuery = <
      TData = GetSeriesDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetSeriesDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSeriesDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSeriesDetailPathsDataQuery, TError, TData>(
      ['getSeriesDetailPathsData', variables],
      graphqlFetcher<GetSeriesDetailPathsDataQuery, GetSeriesDetailPathsDataQueryVariables>(GetSeriesDetailPathsDataDocument, variables),
      options
    );
export const GetSeriesListPageDataDocument = `
    query getSeriesListPageData($language: Language!, $offset: Int, $first: Int) {
  serieses(language: $language, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSeriesListPageDataQuery = <
      TData = GetSeriesListPageDataQuery,
      TError = unknown
    >(
      variables: GetSeriesListPageDataQueryVariables, 
      options?: UseQueryOptions<GetSeriesListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSeriesListPageDataQuery, TError, TData>(
      ['getSeriesListPageData', variables],
      graphqlFetcher<GetSeriesListPageDataQuery, GetSeriesListPageDataQueryVariables>(GetSeriesListPageDataDocument, variables),
      options
    );
export const GetSeriesListPathsDataDocument = `
    query getSeriesListPathsData($language: Language!) {
  serieses(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetSeriesListPathsDataQuery = <
      TData = GetSeriesListPathsDataQuery,
      TError = unknown
    >(
      variables: GetSeriesListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSeriesListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSeriesListPathsDataQuery, TError, TData>(
      ['getSeriesListPathsData', variables],
      graphqlFetcher<GetSeriesListPathsDataQuery, GetSeriesListPathsDataQueryVariables>(GetSeriesListPathsDataDocument, variables),
      options
    );
export const GetSermonDetailDataDocument = `
    query getSermonDetailData($id: ID!) {
  sermon(id: $id) {
    ...recording
  }
}
    ${RecordingFragmentDoc}`;
export const useGetSermonDetailDataQuery = <
      TData = GetSermonDetailDataQuery,
      TError = unknown
    >(
      variables: GetSermonDetailDataQueryVariables, 
      options?: UseQueryOptions<GetSermonDetailDataQuery, TError, TData>
    ) => 
    useQuery<GetSermonDetailDataQuery, TError, TData>(
      ['getSermonDetailData', variables],
      graphqlFetcher<GetSermonDetailDataQuery, GetSermonDetailDataQueryVariables>(GetSermonDetailDataDocument, variables),
      options
    );
export const GetSermonDetailStaticPathsDocument = `
    query getSermonDetailStaticPaths($language: Language!, $first: Int) {
  sermons(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSermonDetailStaticPathsQuery = <
      TData = GetSermonDetailStaticPathsQuery,
      TError = unknown
    >(
      variables: GetSermonDetailStaticPathsQueryVariables, 
      options?: UseQueryOptions<GetSermonDetailStaticPathsQuery, TError, TData>
    ) => 
    useQuery<GetSermonDetailStaticPathsQuery, TError, TData>(
      ['getSermonDetailStaticPaths', variables],
      graphqlFetcher<GetSermonDetailStaticPathsQuery, GetSermonDetailStaticPathsQueryVariables>(GetSermonDetailStaticPathsDocument, variables),
      options
    );
export const GetSermonListStaticPropsDocument = `
    query getSermonListStaticProps($language: Language!, $hasVideo: Boolean, $first: Int, $offset: Int) {
  sermons(
    language: $language
    hasVideo: $hasVideo
    first: $first
    offset: $offset
    orderBy: {direction: DESC, field: CREATED_AT}
  ) {
    nodes {
      ...recordingList
      ...writeFeedFile
    }
    aggregate {
      count
    }
  }
}
    ${RecordingListFragmentDoc}
${WriteFeedFileFragmentDoc}`;
export const useGetSermonListStaticPropsQuery = <
      TData = GetSermonListStaticPropsQuery,
      TError = unknown
    >(
      variables: GetSermonListStaticPropsQueryVariables, 
      options?: UseQueryOptions<GetSermonListStaticPropsQuery, TError, TData>
    ) => 
    useQuery<GetSermonListStaticPropsQuery, TError, TData>(
      ['getSermonListStaticProps', variables],
      graphqlFetcher<GetSermonListStaticPropsQuery, GetSermonListStaticPropsQueryVariables>(GetSermonListStaticPropsDocument, variables),
      options
    );
export const GetSermonListPagePathsDataDocument = `
    query getSermonListPagePathsData($language: Language!, $hasVideo: Boolean) {
  sermons(language: $language, hasVideo: $hasVideo) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetSermonListPagePathsDataQuery = <
      TData = GetSermonListPagePathsDataQuery,
      TError = unknown
    >(
      variables: GetSermonListPagePathsDataQueryVariables, 
      options?: UseQueryOptions<GetSermonListPagePathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSermonListPagePathsDataQuery, TError, TData>(
      ['getSermonListPagePathsData', variables],
      graphqlFetcher<GetSermonListPagePathsDataQuery, GetSermonListPagePathsDataQueryVariables>(GetSermonListPagePathsDataDocument, variables),
      options
    );
export const GetSongAlbumPageDataDocument = `
    query getSongAlbumPageData($id: ID!) {
  musicAlbum(id: $id) {
    recordings {
      nodes {
        ...song
      }
    }
  }
}
    ${SongFragmentDoc}`;
export const useGetSongAlbumPageDataQuery = <
      TData = GetSongAlbumPageDataQuery,
      TError = unknown
    >(
      variables: GetSongAlbumPageDataQueryVariables, 
      options?: UseQueryOptions<GetSongAlbumPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSongAlbumPageDataQuery, TError, TData>(
      ['getSongAlbumPageData', variables],
      graphqlFetcher<GetSongAlbumPageDataQuery, GetSongAlbumPageDataQueryVariables>(GetSongAlbumPageDataDocument, variables),
      options
    );
export const GetSongAlbumPathsDataDocument = `
    query getSongAlbumPathsData($language: Language!, $first: Int) {
  musicAlbums(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSongAlbumPathsDataQuery = <
      TData = GetSongAlbumPathsDataQuery,
      TError = unknown
    >(
      variables: GetSongAlbumPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSongAlbumPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSongAlbumPathsDataQuery, TError, TData>(
      ['getSongAlbumPathsData', variables],
      graphqlFetcher<GetSongAlbumPathsDataQuery, GetSongAlbumPathsDataQueryVariables>(GetSongAlbumPathsDataDocument, variables),
      options
    );
export const GetSongBookPageDataDocument = `
    query getSongBookPageData($language: Language!, $book: String!) {
  musicTracks(language: $language, tagName: $book) {
    nodes {
      ...song
    }
  }
}
    ${SongFragmentDoc}`;
export const useGetSongBookPageDataQuery = <
      TData = GetSongBookPageDataQuery,
      TError = unknown
    >(
      variables: GetSongBookPageDataQueryVariables, 
      options?: UseQueryOptions<GetSongBookPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSongBookPageDataQuery, TError, TData>(
      ['getSongBookPageData', variables],
      graphqlFetcher<GetSongBookPageDataQuery, GetSongBookPageDataQueryVariables>(GetSongBookPageDataDocument, variables),
      options
    );
export const GetSongSponsorPageDataDocument = `
    query getSongSponsorPageData($id: ID!) {
  sponsor(id: $id) {
    recordings(contentType: MUSIC_TRACK) {
      nodes {
        ...song
      }
    }
  }
}
    ${SongFragmentDoc}`;
export const useGetSongSponsorPageDataQuery = <
      TData = GetSongSponsorPageDataQuery,
      TError = unknown
    >(
      variables: GetSongSponsorPageDataQueryVariables, 
      options?: UseQueryOptions<GetSongSponsorPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSongSponsorPageDataQuery, TError, TData>(
      ['getSongSponsorPageData', variables],
      graphqlFetcher<GetSongSponsorPageDataQuery, GetSongSponsorPageDataQueryVariables>(GetSongSponsorPageDataDocument, variables),
      options
    );
export const GetSongSponsorPathsDataDocument = `
    query getSongSponsorPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, withMusic: true, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSongSponsorPathsDataQuery = <
      TData = GetSongSponsorPathsDataQuery,
      TError = unknown
    >(
      variables: GetSongSponsorPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSongSponsorPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSongSponsorPathsDataQuery, TError, TData>(
      ['getSongSponsorPathsData', variables],
      graphqlFetcher<GetSongSponsorPathsDataQuery, GetSongSponsorPathsDataQueryVariables>(GetSongSponsorPathsDataDocument, variables),
      options
    );
export const GetSongDetailTagPageDataDocument = `
    query getSongDetailTagPageData($language: Language!, $tag: String!) {
  musicTracks(language: $language, tagName: $tag) {
    nodes {
      ...recording
      ...playlist
    }
  }
}
    ${RecordingFragmentDoc}
${PlaylistFragmentDoc}`;
export const useGetSongDetailTagPageDataQuery = <
      TData = GetSongDetailTagPageDataQuery,
      TError = unknown
    >(
      variables: GetSongDetailTagPageDataQueryVariables, 
      options?: UseQueryOptions<GetSongDetailTagPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSongDetailTagPageDataQuery, TError, TData>(
      ['getSongDetailTagPageData', variables],
      graphqlFetcher<GetSongDetailTagPageDataQuery, GetSongDetailTagPageDataQueryVariables>(GetSongDetailTagPageDataDocument, variables),
      options
    );
export const GetSongDetailTagPathsDataDocument = `
    query getSongDetailTagPathsData($language: Language!, $first: Int) {
  musicMoodTags(language: $language, first: $first) {
    nodes {
      name
    }
  }
}
    `;
export const useGetSongDetailTagPathsDataQuery = <
      TData = GetSongDetailTagPathsDataQuery,
      TError = unknown
    >(
      variables: GetSongDetailTagPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSongDetailTagPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSongDetailTagPathsDataQuery, TError, TData>(
      ['getSongDetailTagPathsData', variables],
      graphqlFetcher<GetSongDetailTagPathsDataQuery, GetSongDetailTagPathsDataQueryVariables>(GetSongDetailTagPathsDataDocument, variables),
      options
    );
export const GetSongsListPageDataDocument = `
    query getSongsListPageData($language: Language!) {
  musicAlbums(language: $language, first: 1000) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
      sponsor {
        title
      }
    }
  }
  sponsors(language: $language, withMusic: true, first: 1000) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
  }
  musicMoodTags(language: ENGLISH, first: 1000) {
    nodes {
      id
      name
    }
  }
}
    `;
export const useGetSongsListPageDataQuery = <
      TData = GetSongsListPageDataQuery,
      TError = unknown
    >(
      variables: GetSongsListPageDataQueryVariables, 
      options?: UseQueryOptions<GetSongsListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSongsListPageDataQuery, TError, TData>(
      ['getSongsListPageData', variables],
      graphqlFetcher<GetSongsListPageDataQuery, GetSongsListPageDataQueryVariables>(GetSongsListPageDataDocument, variables),
      options
    );
export const GetSponsorAlbumsPageDataDocument = `
    query getSponsorAlbumsPageData($language: Language!, $id: ID!, $offset: Int, $first: Int) {
  sponsor(id: $id) {
    title
  }
  musicAlbums(language: $language, sponsorId: $id, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorAlbumsPageDataQuery = <
      TData = GetSponsorAlbumsPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorAlbumsPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorAlbumsPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorAlbumsPageDataQuery, TError, TData>(
      ['getSponsorAlbumsPageData', variables],
      graphqlFetcher<GetSponsorAlbumsPageDataQuery, GetSponsorAlbumsPageDataQueryVariables>(GetSponsorAlbumsPageDataDocument, variables),
      options
    );
export const GetSponsorAlbumsPathsDataDocument = `
    query getSponsorAlbumsPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorAlbumsPathsDataQuery = <
      TData = GetSponsorAlbumsPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorAlbumsPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorAlbumsPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorAlbumsPathsDataQuery, TError, TData>(
      ['getSponsorAlbumsPathsData', variables],
      graphqlFetcher<GetSponsorAlbumsPathsDataQuery, GetSponsorAlbumsPathsDataQueryVariables>(GetSponsorAlbumsPathsDataDocument, variables),
      options
    );
export const GetSponsorBooksPageDataDocument = `
    query getSponsorBooksPageData($language: Language!, $id: ID!, $offset: Int, $first: Int) {
  sponsor(id: $id) {
    id
    title
    imageWithFallback {
      url(size: 100)
    }
  }
  audiobooks(language: $language, sponsorId: $id, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorBooksPageDataQuery = <
      TData = GetSponsorBooksPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorBooksPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorBooksPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorBooksPageDataQuery, TError, TData>(
      ['getSponsorBooksPageData', variables],
      graphqlFetcher<GetSponsorBooksPageDataQuery, GetSponsorBooksPageDataQueryVariables>(GetSponsorBooksPageDataDocument, variables),
      options
    );
export const GetSponsorBooksPathsDataDocument = `
    query getSponsorBooksPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorBooksPathsDataQuery = <
      TData = GetSponsorBooksPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorBooksPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorBooksPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorBooksPathsDataQuery, TError, TData>(
      ['getSponsorBooksPathsData', variables],
      graphqlFetcher<GetSponsorBooksPathsDataQuery, GetSponsorBooksPathsDataQueryVariables>(GetSponsorBooksPathsDataDocument, variables),
      options
    );
export const GetSponsorConferencesPageDataDocument = `
    query getSponsorConferencesPageData($language: Language!, $id: ID!, $offset: Int, $first: Int) {
  sponsor(id: $id) {
    title
  }
  conferences(language: $language, sponsorId: $id, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorConferencesPageDataQuery = <
      TData = GetSponsorConferencesPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorConferencesPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorConferencesPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorConferencesPageDataQuery, TError, TData>(
      ['getSponsorConferencesPageData', variables],
      graphqlFetcher<GetSponsorConferencesPageDataQuery, GetSponsorConferencesPageDataQueryVariables>(GetSponsorConferencesPageDataDocument, variables),
      options
    );
export const GetSponsorConferencesPathsDataDocument = `
    query getSponsorConferencesPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorConferencesPathsDataQuery = <
      TData = GetSponsorConferencesPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorConferencesPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorConferencesPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorConferencesPathsDataQuery, TError, TData>(
      ['getSponsorConferencesPathsData', variables],
      graphqlFetcher<GetSponsorConferencesPathsDataQuery, GetSponsorConferencesPathsDataQueryVariables>(GetSponsorConferencesPathsDataDocument, variables),
      options
    );
export const GetSponsorDetailPageDataDocument = `
    query getSponsorDetailPageData($id: ID!) {
  sponsor(id: $id) {
    id
    title
    location
    website
    summary
    description
    imageWithFallback {
      url(size: 100)
    }
  }
}
    `;
export const useGetSponsorDetailPageDataQuery = <
      TData = GetSponsorDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorDetailPageDataQuery, TError, TData>(
      ['getSponsorDetailPageData', variables],
      graphqlFetcher<GetSponsorDetailPageDataQuery, GetSponsorDetailPageDataQueryVariables>(GetSponsorDetailPageDataDocument, variables),
      options
    );
export const GetSponsorDetailPathsDataDocument = `
    query getSponsorDetailPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorDetailPathsDataQuery = <
      TData = GetSponsorDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorDetailPathsDataQuery, TError, TData>(
      ['getSponsorDetailPathsData', variables],
      graphqlFetcher<GetSponsorDetailPathsDataQuery, GetSponsorDetailPathsDataQueryVariables>(GetSponsorDetailPathsDataDocument, variables),
      options
    );
export const GetSponsorListPageDataDocument = `
    query getSponsorListPageData($language: Language!, $offset: Int, $first: Int) {
  sponsors(language: $language, offset: $offset, first: $first) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorListPageDataQuery = <
      TData = GetSponsorListPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorListPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorListPageDataQuery, TError, TData>(
      ['getSponsorListPageData', variables],
      graphqlFetcher<GetSponsorListPageDataQuery, GetSponsorListPageDataQueryVariables>(GetSponsorListPageDataDocument, variables),
      options
    );
export const GetSponsorListPathsDataDocument = `
    query getSponsorListPathsData($language: Language!) {
  sponsors(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorListPathsDataQuery = <
      TData = GetSponsorListPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorListPathsDataQuery, TError, TData>(
      ['getSponsorListPathsData', variables],
      graphqlFetcher<GetSponsorListPathsDataQuery, GetSponsorListPathsDataQueryVariables>(GetSponsorListPathsDataDocument, variables),
      options
    );
export const GetSponsorSeriesPageDataDocument = `
    query getSponsorSeriesPageData($language: Language!, $id: ID!, $first: Int, $offset: Int) {
  sponsor(id: $id) {
    title
    imageWithFallback {
      url(size: 100)
    }
  }
  serieses(language: $language, sponsorId: $id, first: $first, offset: $offset) {
    nodes {
      id
      title
      imageWithFallback {
        url(size: 100)
      }
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetSponsorSeriesPageDataQuery = <
      TData = GetSponsorSeriesPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorSeriesPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorSeriesPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorSeriesPageDataQuery, TError, TData>(
      ['getSponsorSeriesPageData', variables],
      graphqlFetcher<GetSponsorSeriesPageDataQuery, GetSponsorSeriesPageDataQueryVariables>(GetSponsorSeriesPageDataDocument, variables),
      options
    );
export const GetSponsorSeriesPathsDataDocument = `
    query getSponsorSeriesPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorSeriesPathsDataQuery = <
      TData = GetSponsorSeriesPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorSeriesPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorSeriesPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorSeriesPathsDataQuery, TError, TData>(
      ['getSponsorSeriesPathsData', variables],
      graphqlFetcher<GetSponsorSeriesPathsDataQuery, GetSponsorSeriesPathsDataQueryVariables>(GetSponsorSeriesPathsDataDocument, variables),
      options
    );
export const GetSponsorTeachingsPageDataDocument = `
    query getSponsorTeachingsPageData($id: ID!, $offset: Int, $first: Int) {
  sponsor(id: $id) {
    id
    title
    imageWithFallback {
      url(size: 100)
    }
    recordings(offset: $offset, first: $first) {
      nodes {
        ...recordingList
        ...writeFeedFile
      }
      aggregate {
        count
      }
    }
  }
}
    ${RecordingListFragmentDoc}
${WriteFeedFileFragmentDoc}`;
export const useGetSponsorTeachingsPageDataQuery = <
      TData = GetSponsorTeachingsPageDataQuery,
      TError = unknown
    >(
      variables: GetSponsorTeachingsPageDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorTeachingsPageDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorTeachingsPageDataQuery, TError, TData>(
      ['getSponsorTeachingsPageData', variables],
      graphqlFetcher<GetSponsorTeachingsPageDataQuery, GetSponsorTeachingsPageDataQueryVariables>(GetSponsorTeachingsPageDataDocument, variables),
      options
    );
export const GetSponsorTeachingsPathsDataDocument = `
    query getSponsorTeachingsPathsData($language: Language!, $first: Int) {
  sponsors(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetSponsorTeachingsPathsDataQuery = <
      TData = GetSponsorTeachingsPathsDataQuery,
      TError = unknown
    >(
      variables: GetSponsorTeachingsPathsDataQueryVariables, 
      options?: UseQueryOptions<GetSponsorTeachingsPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetSponsorTeachingsPathsDataQuery, TError, TData>(
      ['getSponsorTeachingsPathsData', variables],
      graphqlFetcher<GetSponsorTeachingsPathsDataQuery, GetSponsorTeachingsPathsDataQueryVariables>(GetSponsorTeachingsPathsDataDocument, variables),
      options
    );
export const GetStoriesPageDataDocument = `
    query getStoriesPageData($language: Language!, $first: Int, $offset: Int) {
  stories(language: $language, first: $first, offset: $offset) {
    nodes {
      ...recordingList
    }
    aggregate {
      count
    }
  }
}
    ${RecordingListFragmentDoc}`;
export const useGetStoriesPageDataQuery = <
      TData = GetStoriesPageDataQuery,
      TError = unknown
    >(
      variables: GetStoriesPageDataQueryVariables, 
      options?: UseQueryOptions<GetStoriesPageDataQuery, TError, TData>
    ) => 
    useQuery<GetStoriesPageDataQuery, TError, TData>(
      ['getStoriesPageData', variables],
      graphqlFetcher<GetStoriesPageDataQuery, GetStoriesPageDataQueryVariables>(GetStoriesPageDataDocument, variables),
      options
    );
export const GetStoriesPathDataDocument = `
    query getStoriesPathData($language: Language!) {
  stories(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetStoriesPathDataQuery = <
      TData = GetStoriesPathDataQuery,
      TError = unknown
    >(
      variables: GetStoriesPathDataQueryVariables, 
      options?: UseQueryOptions<GetStoriesPathDataQuery, TError, TData>
    ) => 
    useQuery<GetStoriesPathDataQuery, TError, TData>(
      ['getStoriesPathData', variables],
      graphqlFetcher<GetStoriesPathDataQuery, GetStoriesPathDataQueryVariables>(GetStoriesPathDataDocument, variables),
      options
    );
export const GetStoryDetailPageDataDocument = `
    query getStoryDetailPageData($id: ID!) {
  story(id: $id) {
    id
    sequence {
      recordings {
        nodes {
          ...recording
          ...playlist
        }
      }
    }
  }
}
    ${RecordingFragmentDoc}
${PlaylistFragmentDoc}`;
export const useGetStoryDetailPageDataQuery = <
      TData = GetStoryDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetStoryDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetStoryDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetStoryDetailPageDataQuery, TError, TData>(
      ['getStoryDetailPageData', variables],
      graphqlFetcher<GetStoryDetailPageDataQuery, GetStoryDetailPageDataQueryVariables>(GetStoryDetailPageDataDocument, variables),
      options
    );
export const GetStoryDetailPathsDataDocument = `
    query getStoryDetailPathsData($language: Language!, $first: Int) {
  stories(language: $language, first: $first) {
    nodes {
      id
    }
  }
}
    `;
export const useGetStoryDetailPathsDataQuery = <
      TData = GetStoryDetailPathsDataQuery,
      TError = unknown
    >(
      variables: GetStoryDetailPathsDataQueryVariables, 
      options?: UseQueryOptions<GetStoryDetailPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetStoryDetailPathsDataQuery, TError, TData>(
      ['getStoryDetailPathsData', variables],
      graphqlFetcher<GetStoryDetailPathsDataQuery, GetStoryDetailPathsDataQueryVariables>(GetStoryDetailPathsDataDocument, variables),
      options
    );
export const GetTagDetailPageDataDocument = `
    query getTagDetailPageData($language: Language!, $tagName: String, $first: Int, $offset: Int) {
  recordings(
    language: $language
    tagName: $tagName
    first: $first
    offset: $offset
  ) {
    nodes {
      ...recordingList
      ...writeFeedFile
    }
    aggregate {
      count
    }
  }
}
    ${RecordingListFragmentDoc}
${WriteFeedFileFragmentDoc}`;
export const useGetTagDetailPageDataQuery = <
      TData = GetTagDetailPageDataQuery,
      TError = unknown
    >(
      variables: GetTagDetailPageDataQueryVariables, 
      options?: UseQueryOptions<GetTagDetailPageDataQuery, TError, TData>
    ) => 
    useQuery<GetTagDetailPageDataQuery, TError, TData>(
      ['getTagDetailPageData', variables],
      graphqlFetcher<GetTagDetailPageDataQuery, GetTagDetailPageDataQueryVariables>(GetTagDetailPageDataDocument, variables),
      options
    );
export const GetTagDetailPathsQueryDocument = `
    query getTagDetailPathsQuery($language: Language!, $first: Int) {
  tags(language: $language, first: $first) {
    nodes {
      name
    }
  }
}
    `;
export const useGetTagDetailPathsQueryQuery = <
      TData = GetTagDetailPathsQueryQuery,
      TError = unknown
    >(
      variables: GetTagDetailPathsQueryQueryVariables, 
      options?: UseQueryOptions<GetTagDetailPathsQueryQuery, TError, TData>
    ) => 
    useQuery<GetTagDetailPathsQueryQuery, TError, TData>(
      ['getTagDetailPathsQuery', variables],
      graphqlFetcher<GetTagDetailPathsQueryQuery, GetTagDetailPathsQueryQueryVariables>(GetTagDetailPathsQueryDocument, variables),
      options
    );
export const GetTagListPageDataDocument = `
    query getTagListPageData($language: Language!, $first: Int, $offset: Int) {
  tags(language: $language, first: $first, offset: $offset) {
    nodes {
      id
      name
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetTagListPageDataQuery = <
      TData = GetTagListPageDataQuery,
      TError = unknown
    >(
      variables: GetTagListPageDataQueryVariables, 
      options?: UseQueryOptions<GetTagListPageDataQuery, TError, TData>
    ) => 
    useQuery<GetTagListPageDataQuery, TError, TData>(
      ['getTagListPageData', variables],
      graphqlFetcher<GetTagListPageDataQuery, GetTagListPageDataQueryVariables>(GetTagListPageDataDocument, variables),
      options
    );
export const GetTagListPathsDataDocument = `
    query getTagListPathsData($language: Language!) {
  tags(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetTagListPathsDataQuery = <
      TData = GetTagListPathsDataQuery,
      TError = unknown
    >(
      variables: GetTagListPathsDataQueryVariables, 
      options?: UseQueryOptions<GetTagListPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetTagListPathsDataQuery, TError, TData>(
      ['getTagListPathsData', variables],
      graphqlFetcher<GetTagListPathsDataQuery, GetTagListPathsDataQueryVariables>(GetTagListPathsDataDocument, variables),
      options
    );
export const GetTestimoniesPageDataDocument = `
    query getTestimoniesPageData($language: Language!, $offset: Int, $first: Int) {
  testimonies(
    language: $language
    first: $first
    offset: $offset
    orderBy: {direction: DESC, field: WRITTEN_DATE}
  ) {
    nodes {
      author
      body
      writtenDate
    }
    aggregate {
      count
    }
  }
}
    `;
export const useGetTestimoniesPageDataQuery = <
      TData = GetTestimoniesPageDataQuery,
      TError = unknown
    >(
      variables: GetTestimoniesPageDataQueryVariables, 
      options?: UseQueryOptions<GetTestimoniesPageDataQuery, TError, TData>
    ) => 
    useQuery<GetTestimoniesPageDataQuery, TError, TData>(
      ['getTestimoniesPageData', variables],
      graphqlFetcher<GetTestimoniesPageDataQuery, GetTestimoniesPageDataQueryVariables>(GetTestimoniesPageDataDocument, variables),
      options
    );
export const GetTestimoniesPathsDataDocument = `
    query getTestimoniesPathsData($language: Language!) {
  testimonies(language: $language) {
    aggregate {
      count
    }
  }
}
    `;
export const useGetTestimoniesPathsDataQuery = <
      TData = GetTestimoniesPathsDataQuery,
      TError = unknown
    >(
      variables: GetTestimoniesPathsDataQueryVariables, 
      options?: UseQueryOptions<GetTestimoniesPathsDataQuery, TError, TData>
    ) => 
    useQuery<GetTestimoniesPathsDataQuery, TError, TData>(
      ['getTestimoniesPathsData', variables],
      graphqlFetcher<GetTestimoniesPathsDataQuery, GetTestimoniesPathsDataQueryVariables>(GetTestimoniesPathsDataDocument, variables),
      options
    );
export const AddPlaylistDocument = `
    mutation addPlaylist($language: Language!, $title: String!, $isPublic: Boolean!, $recordingIds: [ID!]) {
  playlistAdd(
    input: {language: $language, title: $title, isPublic: $isPublic, recordingIds: $recordingIds}
  ) {
    id
  }
}
    `;
export const useAddPlaylistMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddPlaylistMutation, TError, AddPlaylistMutationVariables, TContext>) => 
    useMutation<AddPlaylistMutation, TError, AddPlaylistMutationVariables, TContext>(
      (variables?: AddPlaylistMutationVariables) => graphqlFetcher<AddPlaylistMutation, AddPlaylistMutationVariables>(AddPlaylistDocument, variables)(),
      options
    );
import { fetchApi } from '@lib/api/fetchApi' 

							export async function getWithAuthGuardData<T>(
								variables: ExactAlt<T, GetWithAuthGuardDataQueryVariables>
							): Promise<GetWithAuthGuardDataQuery> {
								return fetchApi(GetWithAuthGuardDataDocument, { variables });
							}













							export async function loginForgotPassword<T>(
								variables: ExactAlt<T, LoginForgotPasswordMutationVariables>
							): Promise<LoginForgotPasswordMutation> {
								return fetchApi(LoginForgotPasswordDocument, { variables });
							}



							export async function getPlaylistButtonData<T>(
								variables: ExactAlt<T, GetPlaylistButtonDataQueryVariables>
							): Promise<GetPlaylistButtonDataQuery> {
								return fetchApi(GetPlaylistButtonDataDocument, { variables });
							}










							export async function getAccountPlaylistsPageData<T>(
								variables: ExactAlt<T, GetAccountPlaylistsPageDataQueryVariables>
							): Promise<GetAccountPlaylistsPageDataQuery> {
								return fetchApi(GetAccountPlaylistsPageDataDocument, { variables });
							}

							export async function addAccountPlaylist<T>(
								variables: ExactAlt<T, AddAccountPlaylistMutationVariables>
							): Promise<AddAccountPlaylistMutation> {
								return fetchApi(AddAccountPlaylistDocument, { variables });
							}

							export async function getProfileData<T>(
								variables: ExactAlt<T, GetProfileDataQueryVariables>
							): Promise<GetProfileDataQuery> {
								return fetchApi(GetProfileDataDocument, { variables });
							}

							export async function updateProfileData<T>(
								variables: ExactAlt<T, UpdateProfileDataMutationVariables>
							): Promise<UpdateProfileDataMutation> {
								return fetchApi(UpdateProfileDataDocument, { variables });
							}

							export async function register<T>(
								variables: ExactAlt<T, RegisterMutationVariables>
							): Promise<RegisterMutation> {
								return fetchApi(RegisterDocument, { variables });
							}

							export async function registerSocial<T>(
								variables: ExactAlt<T, RegisterSocialMutationVariables>
							): Promise<RegisterSocialMutation> {
								return fetchApi(RegisterSocialDocument, { variables });
							}

							export async function registerIsLoggedIn<T>(
								variables: ExactAlt<T, RegisterIsLoggedInQueryVariables>
							): Promise<RegisterIsLoggedInQuery> {
								return fetchApi(RegisterIsLoggedInDocument, { variables });
							}

							export async function resetPassword<T>(
								variables: ExactAlt<T, ResetPasswordMutationVariables>
							): Promise<ResetPasswordMutation> {
								return fetchApi(ResetPasswordDocument, { variables });
							}

							export async function getAudiobookDetailPageData<T>(
								variables: ExactAlt<T, GetAudiobookDetailPageDataQueryVariables>
							): Promise<GetAudiobookDetailPageDataQuery> {
								return fetchApi(GetAudiobookDetailPageDataDocument, { variables });
							}

							export async function getAudiobookDetailPathsData<T>(
								variables: ExactAlt<T, GetAudiobookDetailPathsDataQueryVariables>
							): Promise<GetAudiobookDetailPathsDataQuery> {
								return fetchApi(GetAudiobookDetailPathsDataDocument, { variables });
							}

							export async function getAudiobookListPageData<T>(
								variables: ExactAlt<T, GetAudiobookListPageDataQueryVariables>
							): Promise<GetAudiobookListPageDataQuery> {
								return fetchApi(GetAudiobookListPageDataDocument, { variables });
							}

							export async function getAudiobookListPathsData<T>(
								variables: ExactAlt<T, GetAudiobookListPathsDataQueryVariables>
							): Promise<GetAudiobookListPathsDataQuery> {
								return fetchApi(GetAudiobookListPathsDataDocument, { variables });
							}

							export async function getBibleBookDetailPageData<T>(
								variables: ExactAlt<T, GetBibleBookDetailPageDataQueryVariables>
							): Promise<GetBibleBookDetailPageDataQuery> {
								return fetchApi(GetBibleBookDetailPageDataDocument, { variables });
							}

							export async function getBibleBookDetailPathsData<T>(
								variables: ExactAlt<T, GetBibleBookDetailPathsDataQueryVariables>
							): Promise<GetBibleBookDetailPathsDataQuery> {
								return fetchApi(GetBibleBookDetailPathsDataDocument, { variables });
							}

							export async function getVersionDetailPageData<T>(
								variables: ExactAlt<T, GetVersionDetailPageDataQueryVariables>
							): Promise<GetVersionDetailPageDataQuery> {
								return fetchApi(GetVersionDetailPageDataDocument, { variables });
							}

							export async function getVersionDetailPathData<T>(
								variables: ExactAlt<T, GetVersionDetailPathDataQueryVariables>
							): Promise<GetVersionDetailPathDataQuery> {
								return fetchApi(GetVersionDetailPathDataDocument, { variables });
							}

							export async function getBibleVersionsPageData<T>(
								variables: ExactAlt<T, GetBibleVersionsPageDataQueryVariables>
							): Promise<GetBibleVersionsPageDataQuery> {
								return fetchApi(GetBibleVersionsPageDataDocument, { variables });
							}

							export async function getConferenceDetailPageData<T>(
								variables: ExactAlt<T, GetConferenceDetailPageDataQueryVariables>
							): Promise<GetConferenceDetailPageDataQuery> {
								return fetchApi(GetConferenceDetailPageDataDocument, { variables });
							}

							export async function getConferenceDetailPathsData<T>(
								variables: ExactAlt<T, GetConferenceDetailPathsDataQueryVariables>
							): Promise<GetConferenceDetailPathsDataQuery> {
								return fetchApi(GetConferenceDetailPathsDataDocument, { variables });
							}

							export async function getConferenceListPageData<T>(
								variables: ExactAlt<T, GetConferenceListPageDataQueryVariables>
							): Promise<GetConferenceListPageDataQuery> {
								return fetchApi(GetConferenceListPageDataDocument, { variables });
							}

							export async function getConferenceListPathsData<T>(
								variables: ExactAlt<T, GetConferenceListPathsDataQueryVariables>
							): Promise<GetConferenceListPathsDataQuery> {
								return fetchApi(GetConferenceListPathsDataDocument, { variables });
							}

							export async function getDiscoverPageData<T>(
								variables: ExactAlt<T, GetDiscoverPageDataQueryVariables>
							): Promise<GetDiscoverPageDataQuery> {
								return fetchApi(GetDiscoverPageDataDocument, { variables });
							}

							export async function getHomeStaticProps<T>(
								variables: ExactAlt<T, GetHomeStaticPropsQueryVariables>
							): Promise<GetHomeStaticPropsQuery> {
								return fetchApi(GetHomeStaticPropsDocument, { variables });
							}

							export async function getPlaylistPageData<T>(
								variables: ExactAlt<T, GetPlaylistPageDataQueryVariables>
							): Promise<GetPlaylistPageDataQuery> {
								return fetchApi(GetPlaylistPageDataDocument, { variables });
							}

							export async function getPlaylistsPageData<T>(
								variables: ExactAlt<T, GetPlaylistsPageDataQueryVariables>
							): Promise<GetPlaylistsPageDataQuery> {
								return fetchApi(GetPlaylistsPageDataDocument, { variables });
							}

							export async function getPresenterDetailPageData<T>(
								variables: ExactAlt<T, GetPresenterDetailPageDataQueryVariables>
							): Promise<GetPresenterDetailPageDataQuery> {
								return fetchApi(GetPresenterDetailPageDataDocument, { variables });
							}

							export async function getPresenterDetailPathsData<T>(
								variables: ExactAlt<T, GetPresenterDetailPathsDataQueryVariables>
							): Promise<GetPresenterDetailPathsDataQuery> {
								return fetchApi(GetPresenterDetailPathsDataDocument, { variables });
							}

							export async function getPresenterListPageData<T>(
								variables: ExactAlt<T, GetPresenterListPageDataQueryVariables>
							): Promise<GetPresenterListPageDataQuery> {
								return fetchApi(GetPresenterListPageDataDocument, { variables });
							}

							export async function getPresenterListPathsData<T>(
								variables: ExactAlt<T, GetPresenterListPathsDataQueryVariables>
							): Promise<GetPresenterListPathsDataQuery> {
								return fetchApi(GetPresenterListPathsDataDocument, { variables });
							}

							export async function getSeriesDetailData<T>(
								variables: ExactAlt<T, GetSeriesDetailDataQueryVariables>
							): Promise<GetSeriesDetailDataQuery> {
								return fetchApi(GetSeriesDetailDataDocument, { variables });
							}

							export async function getSeriesDetailPathsData<T>(
								variables: ExactAlt<T, GetSeriesDetailPathsDataQueryVariables>
							): Promise<GetSeriesDetailPathsDataQuery> {
								return fetchApi(GetSeriesDetailPathsDataDocument, { variables });
							}

							export async function getSeriesListPageData<T>(
								variables: ExactAlt<T, GetSeriesListPageDataQueryVariables>
							): Promise<GetSeriesListPageDataQuery> {
								return fetchApi(GetSeriesListPageDataDocument, { variables });
							}

							export async function getSeriesListPathsData<T>(
								variables: ExactAlt<T, GetSeriesListPathsDataQueryVariables>
							): Promise<GetSeriesListPathsDataQuery> {
								return fetchApi(GetSeriesListPathsDataDocument, { variables });
							}

							export async function getSermonDetailData<T>(
								variables: ExactAlt<T, GetSermonDetailDataQueryVariables>
							): Promise<GetSermonDetailDataQuery> {
								return fetchApi(GetSermonDetailDataDocument, { variables });
							}

							export async function getSermonDetailStaticPaths<T>(
								variables: ExactAlt<T, GetSermonDetailStaticPathsQueryVariables>
							): Promise<GetSermonDetailStaticPathsQuery> {
								return fetchApi(GetSermonDetailStaticPathsDocument, { variables });
							}

							export async function getSermonListStaticProps<T>(
								variables: ExactAlt<T, GetSermonListStaticPropsQueryVariables>
							): Promise<GetSermonListStaticPropsQuery> {
								return fetchApi(GetSermonListStaticPropsDocument, { variables });
							}

							export async function getSermonListPagePathsData<T>(
								variables: ExactAlt<T, GetSermonListPagePathsDataQueryVariables>
							): Promise<GetSermonListPagePathsDataQuery> {
								return fetchApi(GetSermonListPagePathsDataDocument, { variables });
							}

							export async function getSongAlbumPageData<T>(
								variables: ExactAlt<T, GetSongAlbumPageDataQueryVariables>
							): Promise<GetSongAlbumPageDataQuery> {
								return fetchApi(GetSongAlbumPageDataDocument, { variables });
							}

							export async function getSongAlbumPathsData<T>(
								variables: ExactAlt<T, GetSongAlbumPathsDataQueryVariables>
							): Promise<GetSongAlbumPathsDataQuery> {
								return fetchApi(GetSongAlbumPathsDataDocument, { variables });
							}

							export async function getSongBookPageData<T>(
								variables: ExactAlt<T, GetSongBookPageDataQueryVariables>
							): Promise<GetSongBookPageDataQuery> {
								return fetchApi(GetSongBookPageDataDocument, { variables });
							}


							export async function getSongSponsorPageData<T>(
								variables: ExactAlt<T, GetSongSponsorPageDataQueryVariables>
							): Promise<GetSongSponsorPageDataQuery> {
								return fetchApi(GetSongSponsorPageDataDocument, { variables });
							}

							export async function getSongSponsorPathsData<T>(
								variables: ExactAlt<T, GetSongSponsorPathsDataQueryVariables>
							): Promise<GetSongSponsorPathsDataQuery> {
								return fetchApi(GetSongSponsorPathsDataDocument, { variables });
							}

							export async function getSongDetailTagPageData<T>(
								variables: ExactAlt<T, GetSongDetailTagPageDataQueryVariables>
							): Promise<GetSongDetailTagPageDataQuery> {
								return fetchApi(GetSongDetailTagPageDataDocument, { variables });
							}

							export async function getSongDetailTagPathsData<T>(
								variables: ExactAlt<T, GetSongDetailTagPathsDataQueryVariables>
							): Promise<GetSongDetailTagPathsDataQuery> {
								return fetchApi(GetSongDetailTagPathsDataDocument, { variables });
							}

							export async function getSongsListPageData<T>(
								variables: ExactAlt<T, GetSongsListPageDataQueryVariables>
							): Promise<GetSongsListPageDataQuery> {
								return fetchApi(GetSongsListPageDataDocument, { variables });
							}

							export async function getSponsorAlbumsPageData<T>(
								variables: ExactAlt<T, GetSponsorAlbumsPageDataQueryVariables>
							): Promise<GetSponsorAlbumsPageDataQuery> {
								return fetchApi(GetSponsorAlbumsPageDataDocument, { variables });
							}

							export async function getSponsorAlbumsPathsData<T>(
								variables: ExactAlt<T, GetSponsorAlbumsPathsDataQueryVariables>
							): Promise<GetSponsorAlbumsPathsDataQuery> {
								return fetchApi(GetSponsorAlbumsPathsDataDocument, { variables });
							}

							export async function getSponsorBooksPageData<T>(
								variables: ExactAlt<T, GetSponsorBooksPageDataQueryVariables>
							): Promise<GetSponsorBooksPageDataQuery> {
								return fetchApi(GetSponsorBooksPageDataDocument, { variables });
							}

							export async function getSponsorBooksPathsData<T>(
								variables: ExactAlt<T, GetSponsorBooksPathsDataQueryVariables>
							): Promise<GetSponsorBooksPathsDataQuery> {
								return fetchApi(GetSponsorBooksPathsDataDocument, { variables });
							}

							export async function getSponsorConferencesPageData<T>(
								variables: ExactAlt<T, GetSponsorConferencesPageDataQueryVariables>
							): Promise<GetSponsorConferencesPageDataQuery> {
								return fetchApi(GetSponsorConferencesPageDataDocument, { variables });
							}

							export async function getSponsorConferencesPathsData<T>(
								variables: ExactAlt<T, GetSponsorConferencesPathsDataQueryVariables>
							): Promise<GetSponsorConferencesPathsDataQuery> {
								return fetchApi(GetSponsorConferencesPathsDataDocument, { variables });
							}

							export async function getSponsorDetailPageData<T>(
								variables: ExactAlt<T, GetSponsorDetailPageDataQueryVariables>
							): Promise<GetSponsorDetailPageDataQuery> {
								return fetchApi(GetSponsorDetailPageDataDocument, { variables });
							}

							export async function getSponsorDetailPathsData<T>(
								variables: ExactAlt<T, GetSponsorDetailPathsDataQueryVariables>
							): Promise<GetSponsorDetailPathsDataQuery> {
								return fetchApi(GetSponsorDetailPathsDataDocument, { variables });
							}

							export async function getSponsorListPageData<T>(
								variables: ExactAlt<T, GetSponsorListPageDataQueryVariables>
							): Promise<GetSponsorListPageDataQuery> {
								return fetchApi(GetSponsorListPageDataDocument, { variables });
							}

							export async function getSponsorListPathsData<T>(
								variables: ExactAlt<T, GetSponsorListPathsDataQueryVariables>
							): Promise<GetSponsorListPathsDataQuery> {
								return fetchApi(GetSponsorListPathsDataDocument, { variables });
							}

							export async function getSponsorSeriesPageData<T>(
								variables: ExactAlt<T, GetSponsorSeriesPageDataQueryVariables>
							): Promise<GetSponsorSeriesPageDataQuery> {
								return fetchApi(GetSponsorSeriesPageDataDocument, { variables });
							}

							export async function getSponsorSeriesPathsData<T>(
								variables: ExactAlt<T, GetSponsorSeriesPathsDataQueryVariables>
							): Promise<GetSponsorSeriesPathsDataQuery> {
								return fetchApi(GetSponsorSeriesPathsDataDocument, { variables });
							}

							export async function getSponsorTeachingsPageData<T>(
								variables: ExactAlt<T, GetSponsorTeachingsPageDataQueryVariables>
							): Promise<GetSponsorTeachingsPageDataQuery> {
								return fetchApi(GetSponsorTeachingsPageDataDocument, { variables });
							}

							export async function getSponsorTeachingsPathsData<T>(
								variables: ExactAlt<T, GetSponsorTeachingsPathsDataQueryVariables>
							): Promise<GetSponsorTeachingsPathsDataQuery> {
								return fetchApi(GetSponsorTeachingsPathsDataDocument, { variables });
							}

							export async function getStoriesPageData<T>(
								variables: ExactAlt<T, GetStoriesPageDataQueryVariables>
							): Promise<GetStoriesPageDataQuery> {
								return fetchApi(GetStoriesPageDataDocument, { variables });
							}

							export async function getStoriesPathData<T>(
								variables: ExactAlt<T, GetStoriesPathDataQueryVariables>
							): Promise<GetStoriesPathDataQuery> {
								return fetchApi(GetStoriesPathDataDocument, { variables });
							}

							export async function getStoryDetailPageData<T>(
								variables: ExactAlt<T, GetStoryDetailPageDataQueryVariables>
							): Promise<GetStoryDetailPageDataQuery> {
								return fetchApi(GetStoryDetailPageDataDocument, { variables });
							}

							export async function getStoryDetailPathsData<T>(
								variables: ExactAlt<T, GetStoryDetailPathsDataQueryVariables>
							): Promise<GetStoryDetailPathsDataQuery> {
								return fetchApi(GetStoryDetailPathsDataDocument, { variables });
							}

							export async function getTagDetailPageData<T>(
								variables: ExactAlt<T, GetTagDetailPageDataQueryVariables>
							): Promise<GetTagDetailPageDataQuery> {
								return fetchApi(GetTagDetailPageDataDocument, { variables });
							}

							export async function getTagDetailPathsQuery<T>(
								variables: ExactAlt<T, GetTagDetailPathsQueryQueryVariables>
							): Promise<GetTagDetailPathsQueryQuery> {
								return fetchApi(GetTagDetailPathsQueryDocument, { variables });
							}

							export async function getTagListPageData<T>(
								variables: ExactAlt<T, GetTagListPageDataQueryVariables>
							): Promise<GetTagListPageDataQuery> {
								return fetchApi(GetTagListPageDataDocument, { variables });
							}

							export async function getTagListPathsData<T>(
								variables: ExactAlt<T, GetTagListPathsDataQueryVariables>
							): Promise<GetTagListPathsDataQuery> {
								return fetchApi(GetTagListPathsDataDocument, { variables });
							}

							export async function getTestimoniesPageData<T>(
								variables: ExactAlt<T, GetTestimoniesPageDataQueryVariables>
							): Promise<GetTestimoniesPageDataQuery> {
								return fetchApi(GetTestimoniesPageDataDocument, { variables });
							}

							export async function getTestimoniesPathsData<T>(
								variables: ExactAlt<T, GetTestimoniesPathsDataQueryVariables>
							): Promise<GetTestimoniesPathsDataQuery> {
								return fetchApi(GetTestimoniesPathsDataDocument, { variables });
							}

							export async function addPlaylist<T>(
								variables: ExactAlt<T, AddPlaylistMutationVariables>
							): Promise<AddPlaylistMutation> {
								return fetchApi(AddPlaylistDocument, { variables });
							}
