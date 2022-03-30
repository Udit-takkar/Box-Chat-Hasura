import * as Yup from "yup";

const testImage = (url: string, timeout?: number) =>
  new Promise(res => {
    timeout = timeout || 5000;
    let timedOut = false;
    let timer: ReturnType<typeof setTimeout>;
    const img = new Image();

    img.onerror = img.onabort = function () {
      if (!timedOut) {
        clearTimeout(timer);
        res("error");
      }
    };

    img.onload = function () {
      if (!timedOut) {
        clearTimeout(timer);
        res("success");
      }
    };

    img.src = url;

    timer = setTimeout(function () {
      timedOut = true;
      // reset .src to invalid URL so it stops previous
      // loading, but doesn't trigger new load
      img.src = "//!!!!/test.jpg";
      res("timeout");
    }, timeout);
  });

export const AddRoomValidation = Yup.object().shape({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be at least 3 characters")
    .required("Room name cannot be empty"),
});

export const EditProfileValidation = Yup.object().shape({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be at least 3 characters")
    .transform((curr, orig) => (orig === "" ? null : curr))
    .nullable(true),
  imageUrl: Yup.string()
    .test("valid-image-url", "Must use valid image URL", value =>
      testImage(value as string, 1000).then(status => status === "success")
    )
    .transform((curr, orig) => (orig === "" ? null : curr))
    .nullable(true),
});
