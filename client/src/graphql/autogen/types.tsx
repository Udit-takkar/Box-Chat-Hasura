/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Invitation" */
export type Invitation = {
  __typename?: 'Invitation';
  /** An object relationship */
  Room: Room;
  /** An object relationship */
  User: User;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  invitee_id: Scalars['String'];
  room_id: Scalars['Int'];
  seen: Scalars['Boolean'];
  sender_id: Scalars['String'];
  /** An object relationship */
  userByInviteeId: User;
};

/** aggregated selection of "Invitation" */
export type Invitation_Aggregate = {
  __typename?: 'Invitation_aggregate';
  aggregate?: Maybe<Invitation_Aggregate_Fields>;
  nodes: Array<Invitation>;
};

/** aggregate fields of "Invitation" */
export type Invitation_Aggregate_Fields = {
  __typename?: 'Invitation_aggregate_fields';
  avg?: Maybe<Invitation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Invitation_Max_Fields>;
  min?: Maybe<Invitation_Min_Fields>;
  stddev?: Maybe<Invitation_Stddev_Fields>;
  stddev_pop?: Maybe<Invitation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Invitation_Stddev_Samp_Fields>;
  sum?: Maybe<Invitation_Sum_Fields>;
  var_pop?: Maybe<Invitation_Var_Pop_Fields>;
  var_samp?: Maybe<Invitation_Var_Samp_Fields>;
  variance?: Maybe<Invitation_Variance_Fields>;
};


/** aggregate fields of "Invitation" */
export type Invitation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Invitation" */
export type Invitation_Aggregate_Order_By = {
  avg?: InputMaybe<Invitation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invitation_Max_Order_By>;
  min?: InputMaybe<Invitation_Min_Order_By>;
  stddev?: InputMaybe<Invitation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Invitation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Invitation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Invitation_Sum_Order_By>;
  var_pop?: InputMaybe<Invitation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Invitation_Var_Samp_Order_By>;
  variance?: InputMaybe<Invitation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Invitation" */
export type Invitation_Arr_Rel_Insert_Input = {
  data: Array<Invitation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invitation_On_Conflict>;
};

/** aggregate avg on columns */
export type Invitation_Avg_Fields = {
  __typename?: 'Invitation_avg_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Invitation" */
export type Invitation_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Invitation". All fields are combined with a logical 'AND'. */
export type Invitation_Bool_Exp = {
  Room?: InputMaybe<Room_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Invitation_Bool_Exp>>;
  _not?: InputMaybe<Invitation_Bool_Exp>;
  _or?: InputMaybe<Array<Invitation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  invitee_id?: InputMaybe<String_Comparison_Exp>;
  room_id?: InputMaybe<Int_Comparison_Exp>;
  seen?: InputMaybe<Boolean_Comparison_Exp>;
  sender_id?: InputMaybe<String_Comparison_Exp>;
  userByInviteeId?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "Invitation" */
export enum Invitation_Constraint {
  /** unique or primary key constraint */
  InvitationPkey = 'Invitation_pkey'
}

/** input type for incrementing numeric columns in table "Invitation" */
export type Invitation_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Invitation" */
export type Invitation_Insert_Input = {
  Room?: InputMaybe<Room_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  invitee_id?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['Int']>;
  seen?: InputMaybe<Scalars['Boolean']>;
  sender_id?: InputMaybe<Scalars['String']>;
  userByInviteeId?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Invitation_Max_Fields = {
  __typename?: 'Invitation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  invitee_id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Invitation" */
export type Invitation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitee_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invitation_Min_Fields = {
  __typename?: 'Invitation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  invitee_id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Invitation" */
export type Invitation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitee_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Invitation" */
export type Invitation_Mutation_Response = {
  __typename?: 'Invitation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invitation>;
};

/** on_conflict condition type for table "Invitation" */
export type Invitation_On_Conflict = {
  constraint: Invitation_Constraint;
  update_columns?: Array<Invitation_Update_Column>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};

/** Ordering options when selecting data from "Invitation". */
export type Invitation_Order_By = {
  Room?: InputMaybe<Room_Order_By>;
  User?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitee_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  seen?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  userByInviteeId?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: Invitation */
export type Invitation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Invitation" */
export enum Invitation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InviteeId = 'invitee_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  Seen = 'seen',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "Invitation" */
export type Invitation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  invitee_id?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['Int']>;
  seen?: InputMaybe<Scalars['Boolean']>;
  sender_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Invitation_Stddev_Fields = {
  __typename?: 'Invitation_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Invitation" */
export type Invitation_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Invitation_Stddev_Pop_Fields = {
  __typename?: 'Invitation_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Invitation" */
export type Invitation_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Invitation_Stddev_Samp_Fields = {
  __typename?: 'Invitation_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Invitation" */
export type Invitation_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Invitation_Sum_Fields = {
  __typename?: 'Invitation_sum_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Invitation" */
export type Invitation_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** update columns of table "Invitation" */
export enum Invitation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InviteeId = 'invitee_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  Seen = 'seen',
  /** column name */
  SenderId = 'sender_id'
}

/** aggregate var_pop on columns */
export type Invitation_Var_Pop_Fields = {
  __typename?: 'Invitation_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Invitation" */
export type Invitation_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Invitation_Var_Samp_Fields = {
  __typename?: 'Invitation_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Invitation" */
export type Invitation_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Invitation_Variance_Fields = {
  __typename?: 'Invitation_variance_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Invitation" */
export type Invitation_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Member" */
export type Member = {
  __typename?: 'Member';
  /** An object relationship */
  Room: Room;
  /** An object relationship */
  User: User;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  room_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "Member" */
export type Member_Aggregate = {
  __typename?: 'Member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

/** aggregate fields of "Member" */
export type Member_Aggregate_Fields = {
  __typename?: 'Member_aggregate_fields';
  avg?: Maybe<Member_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
  stddev?: Maybe<Member_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Sum_Fields>;
  var_pop?: Maybe<Member_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Var_Samp_Fields>;
  variance?: Maybe<Member_Variance_Fields>;
};


/** aggregate fields of "Member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Member" */
export type Member_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Max_Order_By>;
  min?: InputMaybe<Member_Min_Order_By>;
  stddev?: InputMaybe<Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Member" */
export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Avg_Fields = {
  __typename?: 'Member_avg_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Member" */
export type Member_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  Room?: InputMaybe<Room_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  room_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Member" */
export enum Member_Constraint {
  /** unique or primary key constraint */
  MemberPkey = 'Member_pkey'
}

/** input type for incrementing numeric columns in table "Member" */
export type Member_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Member" */
export type Member_Insert_Input = {
  Room?: InputMaybe<Room_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'Member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Member" */
export type Member_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'Member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Member" */
export type Member_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Member" */
export type Member_Mutation_Response = {
  __typename?: 'Member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** on_conflict condition type for table "Member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "Member". */
export type Member_Order_By = {
  Room?: InputMaybe<Room_Order_By>;
  User?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Member */
export type Member_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Member" */
export enum Member_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Member" */
export type Member_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Member_Stddev_Fields = {
  __typename?: 'Member_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Member" */
export type Member_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Stddev_Pop_Fields = {
  __typename?: 'Member_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Member" */
export type Member_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Stddev_Samp_Fields = {
  __typename?: 'Member_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Member" */
export type Member_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Member_Sum_Fields = {
  __typename?: 'Member_sum_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Member" */
export type Member_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** update columns of table "Member" */
export enum Member_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Member_Var_Pop_Fields = {
  __typename?: 'Member_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Member" */
export type Member_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Var_Samp_Fields = {
  __typename?: 'Member_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Member" */
export type Member_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Variance_Fields = {
  __typename?: 'Member_variance_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Member" */
export type Member_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Message" */
export type Message = {
  __typename?: 'Message';
  /** An object relationship */
  Room: Room;
  /** An object relationship */
  User: User;
  author: Scalars['String'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  room_id: Scalars['Int'];
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'Message_avg_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Message" */
export type Message_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  Room?: InputMaybe<Room_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  room_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  MessagePkey = 'Message_pkey'
}

/** input type for incrementing numeric columns in table "Message" */
export type Message_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  Room?: InputMaybe<Room_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Message" */
export type Message_Max_Order_By = {
  author?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Message" */
export type Message_Min_Order_By = {
  author?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "Message". */
export type Message_Order_By = {
  Room?: InputMaybe<Room_Order_By>;
  User?: InputMaybe<User_Order_By>;
  author?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Message */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  room_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'Message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Message" */
export type Message_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'Message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Message" */
export type Message_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'Message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Message" */
export type Message_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'Message_sum_fields';
  id?: Maybe<Scalars['Int']>;
  room_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Message" */
export type Message_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id'
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'Message_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Message" */
export type Message_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'Message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Message" */
export type Message_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'Message_variance_fields';
  id?: Maybe<Scalars['Float']>;
  room_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Message" */
export type Message_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "Room" */
export type Room = {
  __typename?: 'Room';
  /** An array relationship */
  Invitations: Array<Invitation>;
  /** An aggregate relationship */
  Invitations_aggregate: Invitation_Aggregate;
  /** An array relationship */
  Members: Array<Member>;
  /** An aggregate relationship */
  Members_aggregate: Member_Aggregate;
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregate relationship */
  Messages_aggregate: Message_Aggregate;
  /** An object relationship */
  User: User;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  owner_id: Scalars['String'];
};


/** columns and relationships of "Room" */
export type RoomInvitationsArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


/** columns and relationships of "Room" */
export type RoomInvitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


/** columns and relationships of "Room" */
export type RoomMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "Room" */
export type RoomMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "Room" */
export type RoomMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "Room" */
export type RoomMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "Room" */
export type Room_Aggregate = {
  __typename?: 'Room_aggregate';
  aggregate?: Maybe<Room_Aggregate_Fields>;
  nodes: Array<Room>;
};

/** aggregate fields of "Room" */
export type Room_Aggregate_Fields = {
  __typename?: 'Room_aggregate_fields';
  avg?: Maybe<Room_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Room_Max_Fields>;
  min?: Maybe<Room_Min_Fields>;
  stddev?: Maybe<Room_Stddev_Fields>;
  stddev_pop?: Maybe<Room_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Room_Stddev_Samp_Fields>;
  sum?: Maybe<Room_Sum_Fields>;
  var_pop?: Maybe<Room_Var_Pop_Fields>;
  var_samp?: Maybe<Room_Var_Samp_Fields>;
  variance?: Maybe<Room_Variance_Fields>;
};


/** aggregate fields of "Room" */
export type Room_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Room" */
export type Room_Aggregate_Order_By = {
  avg?: InputMaybe<Room_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Max_Order_By>;
  min?: InputMaybe<Room_Min_Order_By>;
  stddev?: InputMaybe<Room_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Room_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Room_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Room_Sum_Order_By>;
  var_pop?: InputMaybe<Room_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Room_Var_Samp_Order_By>;
  variance?: InputMaybe<Room_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Room" */
export type Room_Arr_Rel_Insert_Input = {
  data: Array<Room_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_On_Conflict>;
};

/** aggregate avg on columns */
export type Room_Avg_Fields = {
  __typename?: 'Room_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Room" */
export type Room_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Room". All fields are combined with a logical 'AND'. */
export type Room_Bool_Exp = {
  Invitations?: InputMaybe<Invitation_Bool_Exp>;
  Members?: InputMaybe<Member_Bool_Exp>;
  Messages?: InputMaybe<Message_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Room_Bool_Exp>>;
  _not?: InputMaybe<Room_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Room" */
export enum Room_Constraint {
  /** unique or primary key constraint */
  RoomNameKey = 'Room_name_key',
  /** unique or primary key constraint */
  RoomPkey = 'Room_pkey'
}

/** input type for incrementing numeric columns in table "Room" */
export type Room_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Room" */
export type Room_Insert_Input = {
  Invitations?: InputMaybe<Invitation_Arr_Rel_Insert_Input>;
  Members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  Messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Room_Max_Fields = {
  __typename?: 'Room_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Room" */
export type Room_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Min_Fields = {
  __typename?: 'Room_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Room" */
export type Room_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Room" */
export type Room_Mutation_Response = {
  __typename?: 'Room_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Room>;
};

/** input type for inserting object relation for remote table "Room" */
export type Room_Obj_Rel_Insert_Input = {
  data: Room_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_On_Conflict>;
};

/** on_conflict condition type for table "Room" */
export type Room_On_Conflict = {
  constraint: Room_Constraint;
  update_columns?: Array<Room_Update_Column>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** Ordering options when selecting data from "Room". */
export type Room_Order_By = {
  Invitations_aggregate?: InputMaybe<Invitation_Aggregate_Order_By>;
  Members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Room */
export type Room_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Room" */
export enum Room_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "Room" */
export type Room_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Room_Stddev_Fields = {
  __typename?: 'Room_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Room" */
export type Room_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Room_Stddev_Pop_Fields = {
  __typename?: 'Room_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Room" */
export type Room_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Room_Stddev_Samp_Fields = {
  __typename?: 'Room_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Room" */
export type Room_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Room_Sum_Fields = {
  __typename?: 'Room_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Room" */
export type Room_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "Room" */
export enum Room_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** aggregate var_pop on columns */
export type Room_Var_Pop_Fields = {
  __typename?: 'Room_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Room" */
export type Room_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Room_Var_Samp_Fields = {
  __typename?: 'Room_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Room" */
export type Room_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Room_Variance_Fields = {
  __typename?: 'Room_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Room" */
export type Room_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  Invitations: Array<Invitation>;
  /** An aggregate relationship */
  Invitations_aggregate: Invitation_Aggregate;
  /** An array relationship */
  Members: Array<Member>;
  /** An aggregate relationship */
  Members_aggregate: Member_Aggregate;
  /** An array relationship */
  Messages: Array<Message>;
  /** An aggregate relationship */
  Messages_aggregate: Message_Aggregate;
  /** An array relationship */
  Rooms: Array<Room>;
  /** An aggregate relationship */
  Rooms_aggregate: Room_Aggregate;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  nft_image_url?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


/** columns and relationships of "User" */
export type UserInvitationsArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserInvitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserRoomsArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'User_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Invitations?: InputMaybe<Invitation_Bool_Exp>;
  Members?: InputMaybe<Member_Bool_Exp>;
  Messages?: InputMaybe<Message_Bool_Exp>;
  Rooms?: InputMaybe<Room_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  nft_image_url?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint */
  UserIdKey = 'User_id_key',
  /** unique or primary key constraint */
  UserPkey = 'User_pkey'
}

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Invitations?: InputMaybe<Invitation_Arr_Rel_Insert_Input>;
  Members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  Messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  Rooms?: InputMaybe<Room_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  nft_image_url?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  nft_image_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  nft_image_url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Invitations_aggregate?: InputMaybe<Invitation_Aggregate_Order_By>;
  Members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  Messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  Rooms_aggregate?: InputMaybe<Room_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  nft_image_url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  NftImageUrl = 'nft_image_url',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  nft_image_url?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'User_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'User_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'User_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'User_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  NftImageUrl = 'nft_image_url',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'User_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'User_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'User_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CreateInvitationOutput = {
  __typename?: 'createInvitationOutput';
  id?: Maybe<Scalars['Int']>;
};

export type DelInvite = {
  __typename?: 'delInvite';
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  acceptInvitation?: Maybe<SampleOutput>;
  createInvitation?: Maybe<CreateInvitationOutput>;
  deleteInvitation?: Maybe<DelInvite>;
  /** delete data from the table: "Invitation" */
  delete_Invitation?: Maybe<Invitation_Mutation_Response>;
  /** delete single row from the table: "Invitation" */
  delete_Invitation_by_pk?: Maybe<Invitation>;
  /** delete data from the table: "Member" */
  delete_Member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "Member" */
  delete_Member_by_pk?: Maybe<Member>;
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** delete data from the table: "Room" */
  delete_Room?: Maybe<Room_Mutation_Response>;
  /** delete single row from the table: "Room" */
  delete_Room_by_pk?: Maybe<Room>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Invitation" */
  insert_Invitation?: Maybe<Invitation_Mutation_Response>;
  /** insert a single row into the table: "Invitation" */
  insert_Invitation_one?: Maybe<Invitation>;
  /** insert data into the table: "Member" */
  insert_Member?: Maybe<Member_Mutation_Response>;
  /** insert a single row into the table: "Member" */
  insert_Member_one?: Maybe<Member>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** insert data into the table: "Room" */
  insert_Room?: Maybe<Room_Mutation_Response>;
  /** insert a single row into the table: "Room" */
  insert_Room_one?: Maybe<Room>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Invitation" */
  update_Invitation?: Maybe<Invitation_Mutation_Response>;
  /** update single row of the table: "Invitation" */
  update_Invitation_by_pk?: Maybe<Invitation>;
  /** update data of the table: "Member" */
  update_Member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "Member" */
  update_Member_by_pk?: Maybe<Member>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update data of the table: "Room" */
  update_Room?: Maybe<Room_Mutation_Response>;
  /** update single row of the table: "Room" */
  update_Room_by_pk?: Maybe<Room>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootAcceptInvitationArgs = {
  invitation_id: Scalars['Int'];
  room_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateInvitationArgs = {
  email: Scalars['String'];
  room_id: Scalars['Int'];
  sender_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteInvitationArgs = {
  invitation_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InvitationArgs = {
  where: Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invitation_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoomArgs = {
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_InvitationArgs = {
  objects: Array<Invitation_Insert_Input>;
  on_conflict?: InputMaybe<Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invitation_OneArgs = {
  object: Invitation_Insert_Input;
  on_conflict?: InputMaybe<Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomArgs = {
  objects: Array<Room_Insert_Input>;
  on_conflict?: InputMaybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_OneArgs = {
  object: Room_Insert_Input;
  on_conflict?: InputMaybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_InvitationArgs = {
  _inc?: InputMaybe<Invitation_Inc_Input>;
  _set?: InputMaybe<Invitation_Set_Input>;
  where: Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invitation_By_PkArgs = {
  _inc?: InputMaybe<Invitation_Inc_Input>;
  _set?: InputMaybe<Invitation_Set_Input>;
  pk_columns: Invitation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomArgs = {
  _inc?: InputMaybe<Room_Inc_Input>;
  _set?: InputMaybe<Room_Set_Input>;
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_By_PkArgs = {
  _inc?: InputMaybe<Room_Inc_Input>;
  _set?: InputMaybe<Room_Set_Input>;
  pk_columns: Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Invitation" */
  Invitation: Array<Invitation>;
  /** fetch aggregated fields from the table: "Invitation" */
  Invitation_aggregate: Invitation_Aggregate;
  /** fetch data from the table: "Invitation" using primary key columns */
  Invitation_by_pk?: Maybe<Invitation>;
  /** fetch data from the table: "Member" */
  Member: Array<Member>;
  /** fetch aggregated fields from the table: "Member" */
  Member_aggregate: Member_Aggregate;
  /** fetch data from the table: "Member" using primary key columns */
  Member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Room" */
  Room: Array<Room>;
  /** fetch aggregated fields from the table: "Room" */
  Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootInvitationArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


export type Query_RootInvitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


export type Query_RootInvitation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Query_RootRoom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Query_RootRoom_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  user_id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Invitation" */
  Invitation: Array<Invitation>;
  /** fetch aggregated fields from the table: "Invitation" */
  Invitation_aggregate: Invitation_Aggregate;
  /** fetch data from the table: "Invitation" using primary key columns */
  Invitation_by_pk?: Maybe<Invitation>;
  /** fetch data from the table: "Member" */
  Member: Array<Member>;
  /** fetch aggregated fields from the table: "Member" */
  Member_aggregate: Member_Aggregate;
  /** fetch data from the table: "Member" using primary key columns */
  Member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "Room" */
  Room: Array<Room>;
  /** fetch aggregated fields from the table: "Room" */
  Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Subscription_RootInvitationArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


export type Subscription_RootInvitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invitation_Order_By>>;
  where?: InputMaybe<Invitation_Bool_Exp>;
};


export type Subscription_RootInvitation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRoomArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Subscription_RootRoom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Room_Order_By>>;
  where?: InputMaybe<Room_Bool_Exp>;
};


export type Subscription_RootRoom_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  user_id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetAllMessagesQueryVariables = Exact<{
  room_id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllMessagesQuery = { __typename?: 'query_root', Room: Array<{ __typename?: 'Room', id: number, Messages: Array<{ __typename?: 'Message', id: number, content: string, author: string, User: { __typename?: 'User', email: string, image_url?: string | null, nft_image_url?: string | null } }>, Messages_aggregate: { __typename?: 'Message_aggregate', aggregate?: { __typename?: 'Message_aggregate_fields', count: number } | null } }> };

export type GetChatRoomsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['String']>;
}>;


export type GetChatRoomsQuery = { __typename?: 'query_root', Member: Array<{ __typename?: 'Member', Room: { __typename?: 'Room', name: string, id: number } }> };

export type GetChatRoomMembersSubscriptionVariables = Exact<{
  room_id: Scalars['Int'];
}>;


export type GetChatRoomMembersSubscription = { __typename?: 'subscription_root', Member: Array<{ __typename?: 'Member', User: { __typename?: 'User', email: string } }> };

export type SendMessageMutationVariables = Exact<{
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  room_id?: InputMaybe<Scalars['Int']>;
}>;


export type SendMessageMutation = { __typename?: 'mutation_root', insert_Message?: { __typename?: 'Message_mutation_response', returning: Array<{ __typename?: 'Message', id: number, created_at: any, content: string, author: string, User: { __typename?: 'User', email: string } }> } | null };

export type MessageAddedSubscriptionVariables = Exact<{
  room_id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type MessageAddedSubscription = { __typename?: 'subscription_root', Room: Array<{ __typename?: 'Room', id: number, Messages: Array<{ __typename?: 'Message', id: number, content: string, author: string, User: { __typename?: 'User', email: string } }>, Messages_aggregate: { __typename?: 'Message_aggregate', aggregate?: { __typename?: 'Message_aggregate_fields', count: number } | null } }> };

export type CreateRoomMutationVariables = Exact<{
  room_name?: InputMaybe<Scalars['String']>;
}>;


export type CreateRoomMutation = { __typename?: 'mutation_root', insert_Room_one?: { __typename?: 'Room', name: string, id: number } | null };

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', User_by_pk?: { __typename?: 'User', image_url?: string | null, email: string, username?: string | null, nft_image_url?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  user_id: Scalars['String'];
  image_url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  nft_image_url?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_User_by_pk?: { __typename?: 'User', image_url?: string | null, username?: string | null, nft_image_url?: string | null } | null };

export type CreateInvitationMutationVariables = Exact<{
  room_id: Scalars['Int'];
  email: Scalars['String'];
  sender_id: Scalars['String'];
}>;


export type CreateInvitationMutation = { __typename?: 'mutation_root', createInvitation?: { __typename?: 'createInvitationOutput', id?: number | null } | null };

export type GetInvitationByIdQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetInvitationByIdQuery = { __typename?: 'query_root', Invitation: Array<{ __typename?: 'Invitation', id: number, Room: { __typename?: 'Room', id: number, name: string }, User: { __typename?: 'User', email: string } }> };

export type AcceptMutationVariables = Exact<{
  invitation_id: Scalars['Int'];
  room_id: Scalars['Int'];
  user_id: Scalars['String'];
}>;


export type AcceptMutation = { __typename?: 'mutation_root', acceptInvitation?: { __typename?: 'SampleOutput', id: number } | null };

export type DelMutationVariables = Exact<{
  invitation_id: Scalars['Int'];
}>;


export type DelMutation = { __typename?: 'mutation_root', deleteInvitation?: { __typename?: 'delInvite', id: number } | null };

export type GetUserPhotoQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserPhotoQuery = { __typename?: 'query_root', User_by_pk?: { __typename?: 'User', image_url?: string | null, nft_image_url?: string | null } | null };

export type GetCountSubscriptionVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetCountSubscription = { __typename?: 'subscription_root', Invitation_aggregate: { __typename?: 'Invitation_aggregate', aggregate?: { __typename?: 'Invitation_aggregate_fields', count: number } | null } };


export const GetAllMessagesDocument = gql`
    query getAllMessages($room_id: Int, $limit: Int, $offset: Int = 0) {
  Room(where: {id: {_eq: $room_id}}) {
    id
    Messages(order_by: {created_at: desc}, limit: $limit, offset: $offset) {
      id
      content
      author
      User {
        email
        image_url
        nft_image_url
      }
    }
    Messages_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useGetAllMessagesQuery__
 *
 * To run a query within a React component, call `useGetAllMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMessagesQuery({
 *   variables: {
 *      room_id: // value for 'room_id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMessagesQuery, GetAllMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMessagesQuery, GetAllMessagesQueryVariables>(GetAllMessagesDocument, options);
      }
export function useGetAllMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMessagesQuery, GetAllMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMessagesQuery, GetAllMessagesQueryVariables>(GetAllMessagesDocument, options);
        }
export type GetAllMessagesQueryHookResult = ReturnType<typeof useGetAllMessagesQuery>;
export type GetAllMessagesLazyQueryHookResult = ReturnType<typeof useGetAllMessagesLazyQuery>;
export type GetAllMessagesQueryResult = Apollo.QueryResult<GetAllMessagesQuery, GetAllMessagesQueryVariables>;
export const GetChatRoomsDocument = gql`
    query getChatRooms($user_id: String) {
  Member(where: {User: {user_id: {_eq: $user_id}}}) {
    Room {
      name
      id
    }
  }
}
    `;

/**
 * __useGetChatRoomsQuery__
 *
 * To run a query within a React component, call `useGetChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetChatRoomsQuery(baseOptions?: Apollo.QueryHookOptions<GetChatRoomsQuery, GetChatRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatRoomsQuery, GetChatRoomsQueryVariables>(GetChatRoomsDocument, options);
      }
export function useGetChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatRoomsQuery, GetChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatRoomsQuery, GetChatRoomsQueryVariables>(GetChatRoomsDocument, options);
        }
export type GetChatRoomsQueryHookResult = ReturnType<typeof useGetChatRoomsQuery>;
export type GetChatRoomsLazyQueryHookResult = ReturnType<typeof useGetChatRoomsLazyQuery>;
export type GetChatRoomsQueryResult = Apollo.QueryResult<GetChatRoomsQuery, GetChatRoomsQueryVariables>;
export const GetChatRoomMembersDocument = gql`
    subscription getChatRoomMembers($room_id: Int!) {
  Member(where: {room_id: {_eq: $room_id}}) {
    User {
      email
    }
  }
}
    `;

/**
 * __useGetChatRoomMembersSubscription__
 *
 * To run a query within a React component, call `useGetChatRoomMembersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetChatRoomMembersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatRoomMembersSubscription({
 *   variables: {
 *      room_id: // value for 'room_id'
 *   },
 * });
 */
export function useGetChatRoomMembersSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetChatRoomMembersSubscription, GetChatRoomMembersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetChatRoomMembersSubscription, GetChatRoomMembersSubscriptionVariables>(GetChatRoomMembersDocument, options);
      }
export type GetChatRoomMembersSubscriptionHookResult = ReturnType<typeof useGetChatRoomMembersSubscription>;
export type GetChatRoomMembersSubscriptionResult = Apollo.SubscriptionResult<GetChatRoomMembersSubscription>;
export const SendMessageDocument = gql`
    mutation sendMessage($author: String, $content: String, $room_id: Int) {
  insert_Message(objects: {author: $author, content: $content, room_id: $room_id}) {
    returning {
      id
      created_at
      content
      author
      User {
        email
      }
    }
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      author: // value for 'author'
 *      content: // value for 'content'
 *      room_id: // value for 'room_id'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MessageAddedDocument = gql`
    subscription messageAdded($room_id: Int, $limit: Int) {
  Room(where: {id: {_eq: $room_id}}) {
    id
    Messages(order_by: {created_at: desc}, limit: $limit) {
      id
      content
      author
      User {
        email
      }
    }
    Messages_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useMessageAddedSubscription__
 *
 * To run a query within a React component, call `useMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageAddedSubscription({
 *   variables: {
 *      room_id: // value for 'room_id'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMessageAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageAddedSubscription, MessageAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageAddedSubscription, MessageAddedSubscriptionVariables>(MessageAddedDocument, options);
      }
export type MessageAddedSubscriptionHookResult = ReturnType<typeof useMessageAddedSubscription>;
export type MessageAddedSubscriptionResult = Apollo.SubscriptionResult<MessageAddedSubscription>;
export const CreateRoomDocument = gql`
    mutation createRoom($room_name: String) {
  insert_Room_one(object: {name: $room_name}) {
    name
    id
  }
}
    `;
export type CreateRoomMutationFn = Apollo.MutationFunction<CreateRoomMutation, CreateRoomMutationVariables>;

/**
 * __useCreateRoomMutation__
 *
 * To run a mutation, you first call `useCreateRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoomMutation, { data, loading, error }] = useCreateRoomMutation({
 *   variables: {
 *      room_name: // value for 'room_name'
 *   },
 * });
 */
export function useCreateRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoomMutation, CreateRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument, options);
      }
export type CreateRoomMutationHookResult = ReturnType<typeof useCreateRoomMutation>;
export type CreateRoomMutationResult = Apollo.MutationResult<CreateRoomMutation>;
export type CreateRoomMutationOptions = Apollo.BaseMutationOptions<CreateRoomMutation, CreateRoomMutationVariables>;
export const GetUserDocument = gql`
    query getUser($user_id: String!) {
  User_by_pk(user_id: $user_id) {
    image_url
    email
    username
    nft_image_url
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($user_id: String!, $image_url: String = null, $username: String = null, $nft_image_url: String = null) {
  update_User_by_pk(
    pk_columns: {user_id: $user_id}
    _set: {image_url: $image_url, username: $username, nft_image_url: $nft_image_url}
  ) {
    image_url
    username
    nft_image_url
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      image_url: // value for 'image_url'
 *      username: // value for 'username'
 *      nft_image_url: // value for 'nft_image_url'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateInvitationDocument = gql`
    mutation createInvitation($room_id: Int!, $email: String!, $sender_id: String!) {
  createInvitation(email: $email, sender_id: $sender_id, room_id: $room_id) {
    id
  }
}
    `;
export type CreateInvitationMutationFn = Apollo.MutationFunction<CreateInvitationMutation, CreateInvitationMutationVariables>;

/**
 * __useCreateInvitationMutation__
 *
 * To run a mutation, you first call `useCreateInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvitationMutation, { data, loading, error }] = useCreateInvitationMutation({
 *   variables: {
 *      room_id: // value for 'room_id'
 *      email: // value for 'email'
 *      sender_id: // value for 'sender_id'
 *   },
 * });
 */
export function useCreateInvitationMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvitationMutation, CreateInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInvitationMutation, CreateInvitationMutationVariables>(CreateInvitationDocument, options);
      }
export type CreateInvitationMutationHookResult = ReturnType<typeof useCreateInvitationMutation>;
export type CreateInvitationMutationResult = Apollo.MutationResult<CreateInvitationMutation>;
export type CreateInvitationMutationOptions = Apollo.BaseMutationOptions<CreateInvitationMutation, CreateInvitationMutationVariables>;
export const GetInvitationByIdDocument = gql`
    query getInvitationById($user_id: String!) {
  Invitation(where: {invitee_id: {_eq: $user_id}}) {
    id
    Room {
      id
      name
    }
    User {
      email
    }
  }
}
    `;

/**
 * __useGetInvitationByIdQuery__
 *
 * To run a query within a React component, call `useGetInvitationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvitationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvitationByIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetInvitationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetInvitationByIdQuery, GetInvitationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvitationByIdQuery, GetInvitationByIdQueryVariables>(GetInvitationByIdDocument, options);
      }
export function useGetInvitationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvitationByIdQuery, GetInvitationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvitationByIdQuery, GetInvitationByIdQueryVariables>(GetInvitationByIdDocument, options);
        }
export type GetInvitationByIdQueryHookResult = ReturnType<typeof useGetInvitationByIdQuery>;
export type GetInvitationByIdLazyQueryHookResult = ReturnType<typeof useGetInvitationByIdLazyQuery>;
export type GetInvitationByIdQueryResult = Apollo.QueryResult<GetInvitationByIdQuery, GetInvitationByIdQueryVariables>;
export const AcceptDocument = gql`
    mutation accept($invitation_id: Int!, $room_id: Int!, $user_id: String!) {
  acceptInvitation(
    invitation_id: $invitation_id
    room_id: $room_id
    user_id: $user_id
  ) {
    id
  }
}
    `;
export type AcceptMutationFn = Apollo.MutationFunction<AcceptMutation, AcceptMutationVariables>;

/**
 * __useAcceptMutation__
 *
 * To run a mutation, you first call `useAcceptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptMutation, { data, loading, error }] = useAcceptMutation({
 *   variables: {
 *      invitation_id: // value for 'invitation_id'
 *      room_id: // value for 'room_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAcceptMutation(baseOptions?: Apollo.MutationHookOptions<AcceptMutation, AcceptMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptMutation, AcceptMutationVariables>(AcceptDocument, options);
      }
export type AcceptMutationHookResult = ReturnType<typeof useAcceptMutation>;
export type AcceptMutationResult = Apollo.MutationResult<AcceptMutation>;
export type AcceptMutationOptions = Apollo.BaseMutationOptions<AcceptMutation, AcceptMutationVariables>;
export const DelDocument = gql`
    mutation del($invitation_id: Int!) {
  deleteInvitation(invitation_id: $invitation_id) {
    id
  }
}
    `;
export type DelMutationFn = Apollo.MutationFunction<DelMutation, DelMutationVariables>;

/**
 * __useDelMutation__
 *
 * To run a mutation, you first call `useDelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delMutation, { data, loading, error }] = useDelMutation({
 *   variables: {
 *      invitation_id: // value for 'invitation_id'
 *   },
 * });
 */
export function useDelMutation(baseOptions?: Apollo.MutationHookOptions<DelMutation, DelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelMutation, DelMutationVariables>(DelDocument, options);
      }
export type DelMutationHookResult = ReturnType<typeof useDelMutation>;
export type DelMutationResult = Apollo.MutationResult<DelMutation>;
export type DelMutationOptions = Apollo.BaseMutationOptions<DelMutation, DelMutationVariables>;
export const GetUserPhotoDocument = gql`
    query getUserPhoto($user_id: String!) {
  User_by_pk(user_id: $user_id) {
    image_url
    nft_image_url
  }
}
    `;

/**
 * __useGetUserPhotoQuery__
 *
 * To run a query within a React component, call `useGetUserPhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPhotoQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserPhotoQuery(baseOptions: Apollo.QueryHookOptions<GetUserPhotoQuery, GetUserPhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPhotoQuery, GetUserPhotoQueryVariables>(GetUserPhotoDocument, options);
      }
export function useGetUserPhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPhotoQuery, GetUserPhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPhotoQuery, GetUserPhotoQueryVariables>(GetUserPhotoDocument, options);
        }
export type GetUserPhotoQueryHookResult = ReturnType<typeof useGetUserPhotoQuery>;
export type GetUserPhotoLazyQueryHookResult = ReturnType<typeof useGetUserPhotoLazyQuery>;
export type GetUserPhotoQueryResult = Apollo.QueryResult<GetUserPhotoQuery, GetUserPhotoQueryVariables>;
export const GetCountDocument = gql`
    subscription getCount($user_id: String!) {
  Invitation_aggregate(where: {invitee_id: {_eq: $user_id}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetCountSubscription__
 *
 * To run a query within a React component, call `useGetCountSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetCountSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountSubscription({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetCountSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetCountSubscription, GetCountSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetCountSubscription, GetCountSubscriptionVariables>(GetCountDocument, options);
      }
export type GetCountSubscriptionHookResult = ReturnType<typeof useGetCountSubscription>;
export type GetCountSubscriptionResult = Apollo.SubscriptionResult<GetCountSubscription>;