import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./App.css";
import {
  Typography,
  TextInput,
  Toast,
  Dropdown,
  Modal,
  Checkbox,
  RadioGroup,
  Button,
  DatePicker,
  Tabs,
} from './components';

function App() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('starter');
  const [date, setDate] = useState('2025-01-01');
  const [toastVisible, setToastVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [modalStyle, setModalStyle] = useState({});

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Calculate modal position when it's shown
  useEffect(() => {
    if (showModal && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 8, // 8px gap below button
        left: rect.left + window.scrollX,
        zIndex: 50,
      });
    }
  }, [showModal]);

  const sections = [
    {
      title: 'TextInput',
      content: (
        <TextInput
          label="Your Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter name"
        />
      ),
    },
    {
      title: 'Toast',
      content: (
        <Button onClick={() => setToastVisible(true)}>Show Toast</Button>
      ),
    },
    {
      title: 'Dropdown',
      content: (
        <Dropdown
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ]}
          value={dropdownValue}
          onChange={setDropdownValue}
        />
      ),
    },
    {
      title: 'Modal',
      content: (
        <>
          <Button ref={buttonRef} onClick={() => setShowModal(true)}>
            Open Modal
          </Button>
          {showModal && (
            <div style={modalStyle} className={`rounded-xl shadow-lg p-6 border border-gray-200 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Modal Title</span>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">&times;</button>
              </div>
              <div>This is a modal body.</div>
            </div>
          )}
        </>
      ),
    },
    {
      title: 'Checkbox',
      content: (
        <Checkbox
          label="Agree to terms"
          checked={checkboxChecked}
          onChange={setCheckboxChecked}
        />
      ),
    },
    {
      title: 'Radio Group',
      content: (
        <RadioGroup
          name="plans"
          value={radioValue}
          onChange={setRadioValue}
          options={[
            { label: 'Starter', value: 'starter', description: 'Basic' },
            { label: 'Pro', value: 'pro', description: 'Advanced' },
          ]}
        />
      ),
    },
    {
      title: 'Button',
      content: <Button variant="primary">Primary Button</Button>,
    },
    {
      title: 'Date Picker',
      content: <DatePicker value={date} onChange={setDate} />,
    },
    {
      title: 'Tabs',
      content: (
        <Tabs
          tabs={[
            { label: 'Home', content: <div>Welcome to Home</div> },
            { label: 'About', content: <div>About section</div> },
          ]}
        />
      ),
    },
  ];

  return (
    <div
    className={`App min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800'} flex flex-col items-center transition-all duration-300 px-4 md:px-6 lg:px-8 py-6`}
    >
      {/* Theme Toggle Button */}
      <div className="flex justify-end w-full max-w-2xl mx-auto mt-8 mb-4">
        <Button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </Button>
      </div>

      <Typography variant="h1" className="text-center text-4xl font-bold mb-8">
        Component Showcase
      </Typography>

      {/* Toast container with backdrop blur */}
      {toastVisible && (
        <>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-md z-40"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Toast
              title="Notice"
              description="This is a toast message"
              status="info"
              onClose={() => setToastVisible(false)}
            />
          </div>
        </>
      )}

      {/* Table for components with spacing between rows */}
      <div className="w-full max-w-2xl mx-auto">
        <table className="w-full table-auto border-separate border-spacing-y-8 rounded-2xl overflow-hidden shadow-lg">
          <tbody>
            {sections.map((section, idx) => (
              <tr
                key={idx}
                className={darkMode ? "bg-gray-700 text-white" : "bg-white"}
              >
                <td className="p-8 align-top">
                  <Typography variant="h2" className="text-xl font-semibold mb-2 text-center">
                    {section.title}
                  </Typography>
                  <div className="flex justify-center">{section.content}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
