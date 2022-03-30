import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddRoomValidation } from "../../validationSchema";
import { useCreateRoomMutation } from "../../graphql/autogen/types";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function CreateRoom() {
  const history = useHistory();

  const [createRoom, { data, loading, error }] = useCreateRoomMutation({
    onError: error => {
      console.log(error);
    },
  });

  return (
    <Formik
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        const body = { ...values };
        createRoom({ variables: { room_name: body.name } })
          .then(returnedData => {
            console.log("returned", returnedData);
            const id = returnedData?.data?.insert_Room_one?.id;
            history.push(`/room/${id}`);

            toast.success("room Successfully created", {
              autoClose: 2000,
            });
            setSubmitting(false);
          })
          .catch(err => {
            setFieldError("name", "Something Went Wrong.");
            console.log(err);
            setSubmitting(false);

            throw Error("Form Error");
          });
      }}
      validationSchema={AddRoomValidation}
      initialValues={{
        name: "",
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div>
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              className="input bg-gray-700 p-4  flex-1 focus:outline-none rounded-lg text-white"
              placeholder="Room Name"
            />
            <button
              disabled={isSubmitting}
              type="submit"
              className=" font-black tracking-wide bg-white mt-8 p-4 ml-4 whitespace-nowrap rounded-lg "
            >
              Create Room
            </button>
          </Form>
          <ErrorMessage name="name">
            {msg => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
        </div>
      )}
    </Formik>
  );
}

export default CreateRoom;
