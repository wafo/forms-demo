import React from 'react';
import { WafoForm, WafoFormInput, WafoFormSelect, WafoFormTextArea, WafoFormAutocomplete, WafoFormMultiSelect } from '@wafo/forms';
import styles from './forms.module.css';
import SubmittedValues from './submittedValues';

function formReducer(state, action) {
  switch (action.type) {
    case 'switch_locale': {
      const locale = state.locale === 'en' ? 'es' : 'en';
      return { ...state, locale };
    }
    case 'toggle_ignore':
      return { ...state, ignoreEmpty: !state.ignoreEmpty };
    case 'preload':
      return {
        ...state,
        key: Math.random(),
        values: {
          name: 'Jose Luis',
          email: 'wafo@gmail.com',
          phone: '6623628212',
          password: 'Test123*',
          password_confirm: 'Test123*',
          color: 'red',
          about:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus est illum ut reprehenderit culpa officia iusto repellendus, dignissimos nihil. Odio accusantium eligendi, nesciunt dignissimos ipsa animi iure assumenda voluptate minima!',
          pokemon: {
            id: 155,
            name: 'Cyndaquil',
            type: 'Fire',
          },
          dogo: [
            {
              id: 1,
              name: 'Guacamole',
              wafoSelected: true,
            },
            {
              id: 2,
              name: 'Chorizo',
              wafoSelected: true,
            },
            {
              id: 3,
              name: 'Queso',
              wafoSelected: true,
            },
          ],
        },
      };
    case 'reset':
      return {
        locale: 'en',
        ignoreEmpty: false,
        values: {},
        key: Math.random(),
      };
    default:
      // No unknown actions.
      throw new Error();
  }
}

const ExampleForm = () => {
  /** ************************ */
  /** Form */
  /** ************************ */
  const [form, dispatchForm] = React.useReducer(formReducer, {
    locale: 'en',
    ignoreEmpty: false,
    values: {},
    key: Math.random(),
  });
  const [formResults, setFormResults] = React.useState({
    form: {},
    values: {},
  });

  const handleFormSubmit = (form, values) => {
    setFormResults({ form, values });
  };

  const toggleIgnore = () => {
    dispatchForm({
      type: 'toggle_ignore',
    });
  };

  const switchLocale = () => {
    dispatchForm({ type: 'switch_locale' });
  };

  const preloadValues = () => {
    dispatchForm({ type: 'preload' });
  };

  const resetForm = () => {
    dispatchForm({ type: 'reset' });
    setFormResults({
      form: {},
      values: {},
    });
  };

  /** ************************ */
  /** Inputs */
  /** ************************ */
  const [password, setPassword] = React.useState(''); // For password match

  // In case I want a dynamic example
  const autocompleteItems = React.useMemo(
    () => [
      {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grass/Poison',
      },
      {
        id: 4,
        name: 'Charmander',
        type: 'Fire',
      },
      {
        id: 7,
        name: 'Squirtle',
        type: 'Water',
      },
      {
        id: 152,
        name: 'Chikorita',
        type: 'Grass',
      },
      {
        id: 155,
        name: 'Cyndaquil',
        type: 'Fire',
      },
      {
        id: 158,
        name: 'Totodile',
        type: 'Water',
      },
      {
        id: 252,
        name: 'Treecko',
        type: 'Grass',
      },
      {
        id: 255,
        name: 'Torchic',
        type: 'Fire',
      },
      {
        id: 258,
        name: 'Mudkip',
        type: 'Water',
      },
      {
        id: 387,
        name: 'Turtwig',
        type: 'Grass',
      },
      {
        id: 390,
        name: 'Chimchar',
        type: 'Fire',
      },
      {
        id: 393,
        name: 'Piplup',
        type: 'Water',
      },
      {
        id: 495,
        name: 'Snivy',
        type: 'Grass',
      },
      {
        id: 498,
        name: 'Tepig',
        type: 'Fire',
      },
      {
        id: 501,
        name: 'Oshawott',
        type: 'Water',
      },
      {
        id: 650,
        name: 'Chespin',
        type: 'Grass',
      },
      {
        id: 653,
        name: 'Fennekin',
        type: 'Fire',
      },
      {
        id: 656,
        name: 'Froakie',
        type: 'Water',
      },
    ],
    [],
  );

  const multiselectItems = React.useMemo(
    () => [
      {
        id: 1,
        name: 'Guacamole',
      },
      {
        id: 2,
        name: 'Chorizo',
      },
      {
        id: 3,
        name: 'Queso',
      },
      {
        id: 4,
        name: 'Champiñones',
      },
      {
        id: 5,
        name: 'Verdura (Lechuga, Tomate, Cebolla)',
      },
      {
        id: 6,
        name: 'Chile / Salsa',
      },
      {
        id: 7,
        name: 'Sabritas',
      },
    ],
    [],
  );

  return (
    <React.Fragment>
      <div className={styles['form-header']}>
        <h2>Example Form</h2>
        <div className={styles.controls}>
          <button type="button" className="btn btn-sm btn-warning" onClick={resetForm}>
            Reset form
          </button>
          <button type="button" className="btn btn-sm btn-warning" onClick={preloadValues}>
            Preload values
          </button>
          <button type="button" className="btn btn-sm btn-warning" onClick={switchLocale}>
            <span>
              Locale: <strong>{form.locale === 'en' ? 'EN' : 'ES'}</strong>
            </span>
          </button>
          <button type="button" className="btn btn-sm btn-warning" onClick={toggleIgnore}>
            <span>
              Empty: <strong>{form.ignoreEmpty ? 'Ignore' : 'Show'}</strong>
            </span>
          </button>
        </div>
      </div>
      <WafoForm
        formId="form-example"
        locale={form.locale}
        ignoreEmpty={form.ignoreEmpty}
        values={form.values}
        onSubmit={handleFormSubmit}
        key={form.key}
      >
        <WafoFormInput
          type="text"
          name="name"
          customClass="col-xs-12 col-md-4"
          placeholder="Enter name"
          label="Name"
          validations={{
            required: {
              value: true,
              message: 'Please fill out your name.',
            },
          }}
          extraProps={{ autoComplete: 'off' }}
        />

        <WafoFormInput
          type="email"
          name="email"
          customClass="col-xs-12 col-md-4"
          placeholder="Enter email"
          label="e-mail"
          validations={{
            required: {
              value: true,
              message: 'Please enter your email',
            },
            email: {
              value: true,
              message: 'Please enter a valid email',
            },
          }}
          extraProps={{ autoComplete: 'off' }}
        />

        <WafoFormInput
          type="text"
          name="phone"
          customClass="col-xs-12 col-md-4"
          placeholder="Enter phone number"
          label="Phone number"
          validations={{
            regex: {
              value: /^\d{10}$/,
              message: 'Please enter a (10 digit) valid phone number',
            },
          }}
          extraProps={{
            autoComplete: 'off',
            maxlength: 10,
          }}
        />

        <WafoFormInput
          type="password"
          name="password"
          customClass="col-xs-12 col-md-4"
          placeholder="Password"
          label="Password"
          validations={{
            required: true,
            regex: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
            },
          }}
          extraProps={{ autoComplete: 'off' }}
          onChangeCallback={({ target: { value } }) => setPassword(value)} // For password match
        />

        <WafoFormInput
          type="password"
          name="password_confirm"
          customClass="col-xs-12 col-md-4"
          placeholder="Confirm password"
          label="Confirm password"
          validations={{
            required: true,
            validationFunction: {
              value: value => password === value,
              message: 'The passwords do not match',
            },
          }}
          extraProps={{ autoComplete: 'off' }}
        />

        <WafoFormSelect
          name="color"
          customClass="col-xs-12 col-md-4"
          defaultValue="Pick your favorite color."
          label="Favorite color"
          options={[
            { value: 'red', display: 'Red is my favorite.' },
            { value: 'green', display: 'Green is my favorite.' },
            { value: 'blue', display: 'Blue is my favorite.' },
          ]}
        />

        <WafoFormTextArea
          name="about"
          customClass="col-xs-12 col-md-12"
          placeholder="Tell us something about you."
          label="About you"
          extraProps={{ rows: 3 }}
        />

        <WafoFormAutocomplete
          name="pokemon"
          customClass="col-xs-12 col-md-4"
          label="Favorite Pokemon starter"
          placeholder="Choose your starter"
          items={autocompleteItems}
          renderInput={item => `#${item.id} - ${item.name}`}
          renderItem={item => (
            <p
              style={{
                margin: 0,
                padding: '.25rem .5rem',
                borderBottom: '1px solid #ccc',
              }}
            >
              <span>
                #{item.id} - {item.name}
              </span>
              <br />
              <span style={{ fontSize: '0.85em' }}>Type: {item.type}</span>
            </p>
          )}
          filterItems={(items, query) =>
            items.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.id.toString().indexOf(query) !== -1)
          }
          validations={{ required: true }}
          onQueryChange={query => console.log('query: ', query)}
          handleChange
        >
          <p style={{ fontSize: '.8em', color: '#777', marginBottom: 0 }}>Search by name and dex number</p>
        </WafoFormAutocomplete>

        <WafoFormMultiSelect
          name="dogo"
          customClass="col-xs-12 col-md-4"
          label="Hotdog toppings"
          placeholder="Pick your toppings"
          itemKey="id"
          items={multiselectItems}
          renderItem={item => item.name}
          renderInput={item => item.name}
          validations={{ required: true }}
          handleChange
        />
      </WafoForm>
      <div className="row">
        <div className="col-12">
          <button type="submit" form="form-example" className="btn btn-primary">
            Submit form
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ marginTop: '2.5rem' }}>
          <SubmittedValues form={formResults.form} values={formResults.values} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExampleForm;
