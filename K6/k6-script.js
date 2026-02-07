import { check, group, sleep } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// --- الإعدادات (Profiles) ---
export let options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // فشل أقل من 1%
        http_req_duration: ['p(95)<1000'], // 95% من الطلبات أسرع من ثانية
    },
    scenarios: {
        smoke: {
            executor: 'constant-vus',
            vus: 1,
            duration: '10s',
        },
        load: {
            executor: 'ramping-vus',
            startTime: '10s',
            stages: [
                { duration: '30s', target: 20 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 },
            ],
        },
    },
};

export default function () {
    const base_url = 'https://dummyjson.com';

    group('Login Scenario', function () {
        // --- هون بنحط سطر الـ request بالظبط ---
        let res = http.post(`${base_url}/auth/login`, JSON.stringify({
            username: 'emilys', 
            password: 'emilyspass',
        }), { headers: { 'Content-Type': 'application/json' } });

        // الـ Assertions عشان نتأكد إن الـ Login نجح
        check(res, {
            'status is 200': (r) => r.status === 200,
            'response time < 1000ms': (r) => r.timings.duration < 1000,
        });
        
        sleep(1);
    });
}

// توليد التقرير
export function handleSummary(data) {
    return {
        "report.html": htmlReport(data),
    };
}