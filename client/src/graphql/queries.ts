import gql from "graphql-tag";

export const GET_ALL_MESSAGES_CHAT_ROOM = gql`
  query getAllMessages($room_id: Int, $limit: Int, $offset: Int = 0) {
    Room(where: { id: { _eq: $room_id } }) {
      id
      Messages(order_by: { created_at: desc }, limit: $limit, offset: $offset) {
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

export const GET_CHAT_ROOMS = gql`
  query getChatRooms($user_id: String) {
    Member(where: { User: { user_id: { _eq: $user_id } } }) {
      Room {
        name
        id
      }
    }
  }
`;

export const SUBSCRIBE_CHAT_ROOM_MEMBERS_LIST = gql`
  subscription getChatRoomMembers($room_id: Int!) {
    Member(where: { room_id: { _eq: $room_id } }) {
      User {
        email
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($author: String, $content: String, $room_id: Int) {
    insert_Message(
      objects: { author: $author, content: $content, room_id: $room_id }
    ) {
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

export const MESSAGES_SUBSCRIPTION = gql`
  subscription messageAdded($room_id: Int, $limit: Int) {
    Room(where: { id: { _eq: $room_id } }) {
      id
      Messages(order_by: { created_at: desc }, limit: $limit) {
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

export const CREATE_ROOM = gql`
  mutation createRoom($room_name: String) {
    insert_Room_one(object: { name: $room_name }) {
      name
      id
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUser($user_id: String!) {
    User_by_pk(user_id: $user_id) {
      image_url
      email
      username
      nft_image_url
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $user_id: String!
    $image_url: String = null
    $username: String = null
    $nft_image_url: String = null
  ) {
    update_User_by_pk(
      pk_columns: { user_id: $user_id }
      _set: {
        image_url: $image_url
        username: $username
        nft_image_url: $nft_image_url
      }
    ) {
      image_url
      username
      nft_image_url
    }
  }
`;

export const CREATE_INVITATION = gql`
  mutation createInvitation(
    $room_id: Int!
    $email: String!
    $sender_id: String!
  ) {
    createInvitation(email: $email, sender_id: $sender_id, room_id: $room_id) {
      id
    }
  }
`;

export const GET_INVITATION_BY_ID = gql`
  query getInvitationById($user_id: String!) {
    Invitation(where: { invitee_id: { _eq: $user_id } }) {
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

export const ACCEPT_INVITAION = gql`
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

export const MARK_SEEN = gql`
  mutation del($invitation_id: Int!) {
    deleteInvitation(invitation_id: $invitation_id) {
      id
    }
  }
`;

export const GET_USER_PHOTO = gql`
  query getUserPhoto($user_id: String!) {
    User_by_pk(user_id: $user_id) {
      image_url
      nft_image_url
    }
  }
`;

export const SUBSCRIBE_TO_INVITATIONS = gql`
  subscription getCount($user_id: String!) {
    Invitation_aggregate(where: { invitee_id: { _eq: $user_id } }) {
      aggregate {
        count
      }
    }
  }
`;
