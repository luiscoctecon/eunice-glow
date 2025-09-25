// Check authentication
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
    }
}

// Fetch dashboard data
async function fetchDashboardData() {
    try {
        const response = await fetch('/api/dashboard', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        updateDashboard(data);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
    }
}

// Update dashboard with data
function updateDashboard(data) {
    // Update stats
    document.getElementById('totalResponses').textContent = data.totalResponses;
    document.getElementById('weeklyResponses').textContent = data.weeklyResponses;
    document.getElementById('conversionRate').textContent = `${data.conversionRate}%`;
    document.getElementById('avgCompletionTime').textContent = `${data.avgCompletionTime}m`;

    // Create charts
    createTypesChart(data.typesDistribution);
    createResponsesChart(data.dailyResponses);

    // Update table
    updateResponsesTable(data.recentResponses);
}

// Create types distribution chart
function createTypesChart(data) {
    const ctx = document.getElementById('typesChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Style Transformer', 'Ambitious Creator', 'Inner Healer', 'Multi-Dreamer'],
            datasets: [{
                data: [
                    data.styleTransformer,
                    data.ambitiousCreator,
                    data.innerHealer,
                    data.multiDreamer
                ],
                backgroundColor: [
                    '#FCD34D',
                    '#60A5FA',
                    '#F472B6',
                    '#34D399'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Create daily responses chart
function createResponsesChart(data) {
    const ctx = document.getElementById('responsesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: 'Responses',
                data: data.map(d => d.count),
                borderColor: '#FCD34D',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Update responses table
function updateResponsesTable(responses) {
    const tbody = document.querySelector('#responsesTable tbody');
    tbody.innerHTML = '';

    responses.forEach(response => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="py-3 px-4 border-b">${response.fullName}</td>
            <td class="py-3 px-4 border-b">${response.email}</td>
            <td class="py-3 px-4 border-b">
                <span class="px-2 py-1 rounded-full text-xs ${getTypeClass(response.quizType)}">
                    ${formatQuizType(response.quizType)}
                </span>
            </td>
            <td class="py-3 px-4 border-b">${formatDate(response.createdAt)}</td>
            <td class="py-3 px-4 border-b">
                <button onclick="viewDetails('${response._id}')" class="text-blue-600 hover:text-blue-800">
                    View
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Helper functions
function getTypeClass(type) {
    const classes = {
        'style-transformer': 'bg-yellow-100 text-yellow-800',
        'ambitious-creator': 'bg-blue-100 text-blue-800',
        'inner-healer': 'bg-pink-100 text-pink-800',
        'multi-dreamer': 'bg-green-100 text-green-800'
    };
    return classes[type] || 'bg-gray-100 text-gray-800';
}

function formatQuizType(type) {
    return type.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// View response details
function viewDetails(id) {
    // Implement response details view
}

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = '/login.html';
});

// Initialize dashboard
checkAuth();
fetchDashboardData();