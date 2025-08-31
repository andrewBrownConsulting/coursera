import { fireEvent, render, screen } from '@testing-library/react';
import Booking, { timesReducer } from './components/Booking';
import { BookingForm } from './components/BookingForm';
import { initialiseTimes, updateTimes } from './components/Booking';
import { fetchAPI } from './apiCalls';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders Choose Date Label', () => {
  render(<><Booking /></>);
  const dateElement = screen.getByText(/Choose Date/i);
  expect(dateElement).toBeInTheDocument();
});
test('renders Submit Button', () => {
  render(<BookingForm />);
  const date = screen.getByLabelText(/Choose Date/i);
  const time = screen.getByLabelText(/Choose Time/i);
  const guests = screen.getByLabelText(/Number of Guests/i);
  const occasion = screen.getByLabelText(/Occasion/i);
  fireEvent.change(date, { target: { value: new Date('2025-8-31') } });
  fireEvent.change(time, { target: { value: '21:00' } });
  fireEvent.change(guests, { target: { value: '4' } });
  fireEvent.change(occasion, { target: { value: 'Birthday' } });
  const submitButton = screen.getByText(/Make Reservation/i);
  expect(submitButton.getAttribute('disabled')).toBe("");
});

test('returns correct initial times', () => {
  const times = initialiseTimes();
  const expectedTimes = fetchAPI(new Date);
  expect(times).toEqual(expectedTimes)
});
test('returns correct update times', () => {
  const testDate = new Date('8-28-25')
  const times = timesReducer(null, testDate);
  console.log(times);
  const expectedTimes = [
    '17:00', '17:30',
    '18:00', '18:30',
    '19:30', '20:30',
    '21:00', '21:30',
    '22:00', '22:30',
    '23:00', '23:30'
  ]
  expect(times).toEqual(expectedTimes)
});

test('test form validation for dates', () => {
  render(<><BookingForm /></>);
  const dateInput = screen.getByLabelText(/Choose Date/i);
  expect(dateInput).toBeRequired();
});