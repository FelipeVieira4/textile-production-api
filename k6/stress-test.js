import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 1 },
    { duration: '1s', target: 2 },
    { duration: '1s', target: 0 }
  ]
};

export default function () {
  const response = http.get('http://localhost:3000/producoes');
  check(response, { 'status is 200': (res) => res.status === 200 });
}
