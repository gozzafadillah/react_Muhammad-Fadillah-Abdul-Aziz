import { fireEvent, render, screen } from "@testing-library/react";
import FormCoding from "../pages/FormCoding";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("render same text in header", () => {
    render(<FormCoding />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });
});

describe("Form", () => {
  it("should be able into input nama", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("nama");
    fireEvent.change(inputElements, { target: { value: "Fadillah" } });
    expect(inputElements.value).toBe("Fadillah");
  });

  it("validated input nama", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("nama");
    fireEvent.change(inputElements, { target: { value: "Fad1llah" } });
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
  });

  it("should be able into input email", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("email");
    fireEvent.change(inputElements, { target: { value: "test@gmail.com" } });
    expect(inputElements.value).toBe("test@gmail.com");
  });

  it("validated input email", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("email");
    fireEvent.change(inputElements, { target: { value: "gozzafadillah.com" } });
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  it("should be able into input noHandphone", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("noHandphone");
    fireEvent.change(inputElements, { target: { value: "0895123456" } });
    expect(inputElements.value).toBe("0895123456");
  });

  it("validated input noHandphone", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("noHandphone");
    fireEvent.change(inputElements, { target: { value: "081" } });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });
  it("should be able to check input pendidikanIT", () => {
    render(<FormCoding />);
    const checkboxElements = screen.getByTestId("pendidikanIT");
    expect(checkboxElements.checked).toEqual(false);
    fireEvent.click(checkboxElements);
    expect(checkboxElements.checked).toEqual(true);
  });

  it("should be able to check input name pendidikanNonIT", () => {
    render(<FormCoding />);
    const checkboxElements = screen.getByTestId("pendidikanNonIT");
    expect(checkboxElements.checked).toEqual(false);
    fireEvent.click(checkboxElements);
    expect(checkboxElements.checked).toEqual(true);
  });

  it("should be able to choose class option", () => {
    render(<FormCoding />);
    const selectElements = screen.getAllByRole("option");
    const selectGolangClass = screen.getByTestId("golang");
    const selectReactClass = screen.getByTestId("reactjs");
    const selectFullStackClass = screen.getByTestId("fullstack");
    expect(selectElements.length).toBe(4);
    fireEvent.select(selectGolangClass);
    fireEvent.select(selectReactClass);
    fireEvent.select(selectFullStackClass);

    expect(selectGolangClass.value).toBe("golang");
    expect(selectReactClass.value).toBe("reactjs");
    expect(selectFullStackClass.value).toBe("fullstack");
  });

  it("should be able input text name harapan", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("textHarapan");
    fireEvent.change(inputElements, {
      target: { value: "Text Harapan Bangsa" },
    });
    expect(inputElements.value).toBe("Text Harapan Bangsa");
  });

  it("reset form data", () => {
    render(<FormCoding />);

    // Inisiasi element
    const inputElemenName = screen.getByTestId("nama");
    const inputElementEmail = screen.getByTestId("email");
    const inputElementPhone = screen.getByTestId("noHandphone");
    const inputElemenTextHarapan = screen.getByTestId("textHarapan");

    // input
    fireEvent.change(inputElemenName, { target: { value: "Fadillah" } });
    fireEvent.change(inputElementEmail, {
      target: { value: "Fadillah@gmail.com" },
    });
    fireEvent.change(inputElementPhone, { target: { value: "081320503262" } });
    fireEvent.change(inputElemenTextHarapan, { target: { value: "Harapan" } });

    // Reset Btn
    fireEvent.click(screen.getByRole("button", { name: /Reset/i }));

    // Expect
    expect(inputElemenName.value).toBe("");
    expect(inputElementEmail.value).toBe("");
    expect(inputElementPhone.value).toBe("");
    expect(inputElemenTextHarapan.value).toBe("");
  });

  it("submit data form", () => {
    render(<FormCoding />);

    // alert if valid or not
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    // Inisiasi element
    const inputElemenName = screen.getByTestId("nama");
    const inputElementEmail = screen.getByTestId("email");
    const inputElementPhone = screen.getByTestId("noHandphone");
    const inputElemenTextHarapan = screen.getByTestId("textHarapan");
    const checkboxElements = screen.getByTestId("pendidikanNonIT");
    const selectClass = screen.getByTestId("pilihKelas");
    const selectFile = screen.getByTestId("suratKesungguhan");

    const imageFile = new File(
      ["harapan"],
      "harapan.jpg",
      { name: /surat kesungguhan/i },
      { type: "image/*,.pdf" }
    );

    fireEvent.change(inputElemenName, { target: { value: "Fadillah" } });
    fireEvent.change(inputElementEmail, {
      target: { value: "Fadillah@gmail.com" },
    });
    fireEvent.change(inputElementPhone, { target: { value: "081320503262" } });
    fireEvent.click(checkboxElements);
    userEvent.selectOptions(selectClass, "golang");
    userEvent.upload(selectFile, imageFile);
    fireEvent.change(inputElemenTextHarapan, { target: { value: "Harapan" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(alertMock).toHaveBeenCalledTimes(1);

    expect(inputElemenName).toHaveValue("");
    expect(inputElementEmail).toHaveValue("");
    expect(inputElementPhone).toHaveValue(null);
    expect(inputElemenTextHarapan).toHaveValue("");
    expect(checkboxElements).not.toBeChecked();
    expect(selectClass).toHaveValue("");
    expect(selectFile.value).toBe("");
  });

  it("when click submit button if data was inputted is invalid", () => {
    render(<FormCoding />);
    // alert if valid or not
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    // Inisiasi element
    const inputElemenName = screen.getByTestId("nama");
    const inputElementEmail = screen.getByTestId("email");
    const inputElementPhone = screen.getByTestId("noHandphone");
    const inputElemenTextHarapan = screen.getByTestId("textHarapan");
    const checkboxElements = screen.getByTestId("pendidikanNonIT");
    const selectClass = screen.getByTestId("pilihKelas");
    const selectFile = screen.getByTestId("suratKesungguhan");

    const imageFile = new File(
      ["harapan"],
      "harapan.jpg",
      { name: /surat kesungguhan/i },
      { type: "image/*,.pdf" }
    );

    fireEvent.change(inputElemenName, { target: { value: "Fad1ll4h" } });
    fireEvent.change(inputElementEmail, {
      target: { value: "Fadillahgmail.com" },
    });
    fireEvent.change(inputElementPhone, {
      target: { value: "0813205032620000000" },
    });
    fireEvent.click(checkboxElements);
    userEvent.selectOptions(selectClass, "golang");
    userEvent.upload(selectFile, imageFile);
    fireEvent.change(inputElemenTextHarapan, { target: { value: "Harapan" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getAllByRole("listitem").length).toBe(3);

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
