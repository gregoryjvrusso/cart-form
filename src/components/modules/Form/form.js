import React, { useState } from "react";
import { arrayOf, func, shape, string } from "prop-types";
import Button from "../../elements/Button";
import Flex from "../../elements/Flex";
import Input from "../../elements/Input";
import InputSelected from "../../elements/InputSelected";
import regex from "../../../constants/regex-form";
import {
  onInputChange,
  onInputBlur,
  onInputSelectBlur,
  handleSubmit,
} from "../../../utils/formEvent";
import { Container, FlexForm } from "./form.styles";

const Form = ({ dataSelect, ...props }) => {
  const errorData = {
    card: false,
    name: false,
    date: false,
    cvv: false,
    subdivision: false,
  };
  const [error, setError] = useState(errorData);

  return (
    <Flex width={"100%"}>
      <Container onSubmit={(e) => handleSubmit(e, error)} width={"100%"} id="form">
        <FlexForm>
          <Input
            name="card"
            textLabel="Número do cartão"
            value={props.card}
            setValue={props.setCard}
            error={error}
            setError={setError}
            messageError="Número de cartão inválido"
            onInputChange={onInputChange}
            onInputBlur={onInputBlur}
            mask="9999 9999 9999 9999"
            regex={regex}
          />
        </FlexForm>
        <FlexForm>
          <Input
            name="name"
            textLabel="Nome"
            value={props.name}
            setValue={props.setName}
            error={error}
            setError={setError}
            messageError="Insira seu nome completo"
            onInputBlur={onInputBlur}
            onInputChange={onInputChange}
            regex={regex}
          />
        </FlexForm>
        <FlexForm>
          <FlexForm>
            <Input
              name="date"
              textLabel="Validade"
              value={props.date}
              setValue={props.setDate}
              error={error}
              setError={setError}
              messageError="Data inválida"
              onInputBlur={onInputBlur}
              onInputChange={onInputChange}
              mask="99/99"
              regex={regex}
            />
          </FlexForm>
          <FlexForm ml={2}>
            <Input
              name="cvv"
              textLabel="CVV"
              value={props.cvv}
              setValue={props.setCvv}
              error={error}
              setError={setError}
              messageError="Código inválido"
              onInputBlur={onInputBlur}
              onInputChange={onInputChange}
              mask="999"
              regex={regex}
            />
          </FlexForm>
        </FlexForm>
        <FlexForm>
          <InputSelected
            onInputBlur={onInputSelectBlur}
            onInputChange={onInputChange}
            value={props.subdivision}
            setValue={props.setSubdivision}
            name="subdivision"
            options={dataSelect}
            textLabel="Quantidade de parcelas"
            error={error}
            setError={setError}
            messageError="Insira o número de parcelas"
          />
        </FlexForm>
        <Flex justifyContent={"flex-end"} mt={3}>
          <Flex width={["100%", "100%", "50%"]}>
            <Button type="submit" form="form" value="Submit">
              CONTINUAR
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

Form.propTypes = {
  dataSelect: arrayOf(
    shape({
      value: string,
      text: string,
    })
  ).isRequired,
};

Form.displayName = "Form";

export default Form;
