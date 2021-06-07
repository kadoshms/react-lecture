const timeout = (time) => new Promise(res => setTimeout(res, time));

const incidents = [
    { id: '1', severity: 'HIGH', category: 'IAM', source: 'kadoshms/react-lecture' },
    { id: '2',severity: 'INFO', category: 'GENERAL', source: 'kadoshms/react-lecture' },
    { id: '3',severity: 'LOW', category: 'K8S', source: 'kadoshms/react-lecture' },
    { id: '11',severity: 'LOW', category: 'K8S', source: 'kadoshms/react-lecture' },
    { id: '4',severity: 'CRITICAL', category: 'IAM', source: 'kadoshms/react-lecture' },
    { id: '5',severity: 'INFO', category: 'IAM', source: 'kadoshms/react-lecture' },
    { id: '12',severity: 'MEDIUM', category: 'IAM', source: 'kadoshms/react-lecture' },
];

export class Service {
    static async getData(severities, count) {
        console.log(`started #${count}`);
        if (count > 0 && Math.random() < 0.5) {
            console.log('timeout');
            await timeout(3000);
        }
        const result = incidents.filter(inc => severities.includes(inc.severity));
        console.log(`finished #${count}`);
        return result;
    }
}
