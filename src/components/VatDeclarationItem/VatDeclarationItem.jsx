
import PropTypes from "prop-types";

const VatDeclarationItem = ({ declarations }) => {
    return (
      <div>
        <ul>
          {declarations.map((declaration) => (
            <li key={declaration.id}>
              <p>{declaration.company}</p>
              <p>{declaration.revenue}</p>
              <p>{declaration.vatPayable}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

VatDeclarationItem.propTypes = {
  declarations: PropTypes.array.isRequired,
};

export default VatDeclarationItem;