// Real Ethereum data (2025-08-14 to 2025-09-01)
const realEthereumData = [{"ds":"2025-08-14T00:00:00.000Z","y":4548.1666260726},{"ds":"2025-08-15T00:00:00.000Z","y":4439.9886331233},{"ds":"2025-08-16T00:00:00.000Z","y":4426.1803113344},{"ds":"2025-08-17T00:00:00.000Z","y":4473.2715559761},{"ds":"2025-08-18T00:00:00.000Z","y":4312.5050093174},{"ds":"2025-08-19T00:00:00.000Z","y":4073.4642014243},{"ds":"2025-08-20T00:00:00.000Z","y":4334.5003930871},{"ds":"2025-08-21T00:00:00.000Z","y":4223.2098532759},{"ds":"2025-08-22T00:00:00.000Z","y":4831.3487230165},{"ds":"2025-08-23T00:00:00.000Z","y":4776.0903527934},{"ds":"2025-08-24T00:00:00.000Z","y":4779.6473316152},{"ds":"2025-08-25T00:00:00.000Z","y":4372.9877668349},{"ds":"2025-08-26T00:00:00.000Z","y":4600.4267415471},{"ds":"2025-08-27T00:00:00.000Z","y":4503.3928436231},{"ds":"2025-08-28T00:00:00.000Z","y":4507.1776761205},{"ds":"2025-08-29T00:00:00.000Z","y":4360.1530059699},{"ds":"2025-08-30T00:00:00.000Z","y":4374.153377662},{"ds":"2025-08-31T00:00:00.000Z","y":4390.0191302417},{"ds":"2025-09-01T00:00:00.000Z","y":4314.4704289978}];

// Real data date range
const REAL_DATA_START = new Date('2025-08-14T00:00:00.000Z');
const REAL_DATA_END = new Date('2025-09-01T00:00:00.000Z');

// Cryptocurrency data with forecasts
const cryptoData = {
    "BTC": {
        "name": "Bitcoin",
        "symbol": "BTC",
        "current_price": 107227.63,
        "color": "#1FB8CD",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":107227.6327655456},{"ds":"2025-08-10T00:00:00.000","yhat":107268.7386891655},{"ds":"2025-08-11T00:00:00.000","yhat":107313.034750321},{"ds":"2025-08-12T00:00:00.000","yhat":107420.4197851771},{"ds":"2025-08-13T00:00:00.000","yhat":107448.6591905415},{"ds":"2025-08-14T00:00:00.000","yhat":107584.0020188606},{"ds":"2025-08-15T00:00:00.000","yhat":107572.7304325755},{"ds":"2025-08-16T00:00:00.000","yhat":107645.9403619819},{"ds":"2025-08-17T00:00:00.000","yhat":107701.3810807739},{"ds":"2025-08-18T00:00:00.000","yhat":107759.68804597},{"ds":"2025-08-19T00:00:00.000","yhat":107880.2166120548},{"ds":"2025-08-20T00:00:00.000","yhat":107920.2609230448},{"ds":"2025-08-21T00:00:00.000","yhat":108065.6807533584},{"ds":"2025-08-22T00:00:00.000","yhat":108062.457906406},{"ds":"2025-08-23T00:00:00.000","yhat":108141.480938829},{"ds":"2025-08-24T00:00:00.000","yhat":108200.3859354912},{"ds":"2025-08-25T00:00:00.000","yhat":108259.7877766857},{"ds":"2025-08-26T00:00:00.000","yhat":108379.1096803664},{"ds":"2025-08-27T00:00:00.000","yhat":108415.7955663895},{"ds":"2025-08-28T00:00:00.000","yhat":108555.9283174265},{"ds":"2025-08-29T00:00:00.000","yhat":108545.7758984237},{"ds":"2025-08-30T00:00:00.000","yhat":108616.5644921013},{"ds":"2025-08-31T00:00:00.000","yhat":108666.3067885001},{"ds":"2025-09-01T00:00:00.000","yhat":108716.0202926442},{"ds":"2025-09-02T00:00:00.000","yhat":108825.543851915},{"ds":"2025-09-03T00:00:00.000","yhat":108852.7373520855},{"ds":"2025-09-04T00:00:00.000","yhat":108984.0880297502},{"ds":"2025-09-05T00:00:00.000","yhat":108966.2456963708}]
    },
    "ETH": {
        "name": "Ethereum",
        "symbol": "ETH",
        "current_price": 3062.60,
        "color": "#FFC185",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-10T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-11T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-12T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-13T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-14T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-15T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-16T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-17T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-18T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-19T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-20T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-21T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-22T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-23T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-24T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-25T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-26T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-27T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-28T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-29T00:00:00.000","yhat":3055.7955556912},{"ds":"2025-08-30T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-31T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-09-01T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-09-02T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-09-03T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-09-04T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-09-05T00:00:00.000","yhat":3055.7955556912}]
    },
    "DOGE": {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "current_price": 0.24,
        "color": "#B4413C",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-10T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-11T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-12T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-13T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-14T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-15T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-16T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-17T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-18T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-19T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-20T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-21T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-22T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-23T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-24T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-25T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-26T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-27T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-28T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-29T00:00:00.000","yhat":0.2448089281},{"ds":"2025-08-30T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-31T00:00:00.000","yhat":0.2418425341},{"ds":"2025-09-01T00:00:00.000","yhat":0.2424994612},{"ds":"2025-09-02T00:00:00.000","yhat":0.2428435555},{"ds":"2025-09-03T00:00:00.000","yhat":0.243375552},{"ds":"2025-09-04T00:00:00.000","yhat":0.2442734268},{"ds":"2025-09-05T00:00:00.000","yhat":0.2448089281}]
    },
    "GOLD": {
        "name": "Gold",
        "symbol": "GOLD",
        "current_price": 83155.12,
        "color": "#ECEBD5",
        "data": [{"ds":"2025-08-09T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-10T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-11T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-12T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-13T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-14T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-15T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-16T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-17T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-18T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-19T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-20T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-21T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-22T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-23T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-24T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-25T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-26T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-27T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-28T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-29T00:00:00.000","yhat":83361.6844124788},{"ds":"2025-08-30T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-31T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-09-01T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-09-02T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-09-03T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-09-04T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-09-05T00:00:00.000","yhat":83361.6844124788}]
    }
};

// Global variables
let currentChart = null;
let currentData = [];
let currentPage = 1;
const rowsPerPage = 10;

// DOM elements
const elements = {
    cryptoSelect: document.getElementById('crypto-select'),
    startDate: document.getElementById('start-date'),
    endDate: document.getElementById('end-date'),
    dateError: document.getElementById('date-error'),
    generateBtn: document.getElementById('generate-forecast'),
    btnText: document.getElementById('btn-text'),
    btnLoading: document.getElementById('btn-loading'),
    currentPrice: document.getElementById('current-price'),
    predictedPrice: document.getElementById('predicted-price'),
    forecastChange: document.getElementById('forecast-change'),
    forecastPeriod: document.getElementById('forecast-period'),
    chartCanvas: document.getElementById('forecast-chart'),
    tableBody: document.getElementById('table-body'),
    pagination: document.getElementById('pagination'),
    paginationInfo: document.getElementById('pagination-info'),
    dataSourceBadge: document.getElementById('data-source-badge')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaults();
    setupEventListeners();
    generateForecast();
});

function initializeDefaults() {
    // Set default cryptocurrency to BTC
    elements.cryptoSelect.value = 'BTC';
    
    // Set default date range (last 15 days of available data)
    const btcData = cryptoData.BTC.data;
    const lastDate = new Date(btcData[btcData.length - 1].ds);
    const startDate = new Date(lastDate);
    startDate.setDate(startDate.getDate() - 15);
    
    elements.endDate.value = formatDateForInput(lastDate);
    elements.startDate.value = formatDateForInput(startDate);
}

function setupEventListeners() {
    elements.cryptoSelect.addEventListener('change', function(e) {
        e.preventDefault();
        validateAndGenerate();
    });
    elements.startDate.addEventListener('change', function(e) {
        e.preventDefault();
        validateDates();
    });
    elements.endDate.addEventListener('change', function(e) {
        e.preventDefault();
        validateDates();
    });
    elements.generateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        generateForecast();
    });
}

function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

function validateDates() {
    const startDate = new Date(elements.startDate.value);
    const endDate = new Date(elements.endDate.value);
    
    if (startDate >= endDate) {
        elements.dateError.style.display = 'block';
        elements.generateBtn.disabled = true;
        return false;
    } else {
        elements.dateError.style.display = 'none';
        elements.generateBtn.disabled = false;
        return true;
    }
}

function validateAndGenerate() {
    if (validateDates()) {
        generateForecast();
    }
}

function isDateInRealDataRange(date) {
    return date >= REAL_DATA_START && date <= REAL_DATA_END;
}

function getRealEthereumPrice(date) {
    const dateStr = date.toISOString().split('T')[0];
    const realDataPoint = realEthereumData.find(item => {
        const itemDateStr = new Date(item.ds).toISOString().split('T')[0];
        return itemDateStr === dateStr;
    });
    return realDataPoint ? realDataPoint.y : null;
}

function getDataSourceType(crypto, startDate, endDate) {
    if (crypto !== 'ETH') {
        return 'forecast';
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const hasRealData = start <= REAL_DATA_END && end >= REAL_DATA_START;
    const hasOnlyRealData = start >= REAL_DATA_START && end <= REAL_DATA_END;
    
    if (hasOnlyRealData) return 'real';
    if (hasRealData) return 'mixed';
    return 'forecast';
}

function generateForecast() {
    if (!validateDates()) return;
    
    showLoading(true);
    
    setTimeout(() => {
        const selectedCrypto = elements.cryptoSelect.value;
        const startDate = elements.startDate.value;
        const endDate = elements.endDate.value;
        
        // Filter data based on date range and integrate real data for ETH
        const filteredData = filterDataByDateRange(selectedCrypto, startDate, endDate);
        currentData = processData(filteredData, selectedCrypto);
        
        // Update data source badge
        updateDataSourceBadge(selectedCrypto, startDate, endDate);
        
        // Update all sections
        updateMetrics(selectedCrypto, currentData);
        updateChart(selectedCrypto, currentData);
        updateTable(currentData);
        
        showLoading(false);
    }, 800);
}

function updateDataSourceBadge(crypto, startDate, endDate) {
    const sourceType = getDataSourceType(crypto, startDate, endDate);
    let badgeText = '';
    let badgeClass = '';
    
    switch (sourceType) {
        case 'real':
            badgeText = 'Real Data';
            badgeClass = 'status--success';
            break;
        case 'mixed':
            badgeText = 'Mixed Data (Real + Forecast)';
            badgeClass = 'status--info';
            break;
        case 'forecast':
            badgeText = 'Forecasted Data';
            badgeClass = 'status--warning';
            break;
    }
    
    elements.dataSourceBadge.textContent = badgeText;
    elements.dataSourceBadge.className = `status ${badgeClass}`;
}

function showLoading(show) {
    if (show) {
        elements.btnText.style.display = 'none';
        elements.btnLoading.style.display = 'inline';
        elements.generateBtn.disabled = true;
        document.querySelector('.main-content').classList.add('loading');
    } else {
        elements.btnText.style.display = 'inline';
        elements.btnLoading.style.display = 'none';
        elements.generateBtn.disabled = false;
        document.querySelector('.main-content').classList.remove('loading');
    }
}

function filterDataByDateRange(crypto, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const forecastData = cryptoData[crypto].data.filter(item => {
        const itemDate = new Date(item.ds);
        return itemDate >= start && itemDate <= end;
    });
    
    // For Ethereum, integrate real data where available
    if (crypto === 'ETH') {
        return forecastData.map(item => {
            const itemDate = new Date(item.ds);
            if (isDateInRealDataRange(itemDate)) {
                const realPrice = getRealEthereumPrice(itemDate);
                if (realPrice !== null) {
                    return {
                        ds: item.ds,
                        yhat: realPrice,
                        isReal: true
                    };
                }
            }
            return {
                ds: item.ds,
                yhat: item.yhat,
                isReal: false
            };
        });
    }
    
    // For other cryptos, return forecast data with isReal flag
    return forecastData.map(item => ({
        ds: item.ds,
        yhat: item.yhat,
        isReal: false
    }));
}

function processData(data, crypto) {
    const processedData = [];
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const prevItem = i > 0 ? data[i - 1] : null;
        
        const dailyChange = prevItem ? item.yhat - prevItem.yhat : 0;
        const changePercent = prevItem ? ((dailyChange / prevItem.yhat) * 100) : 0;
        
        let trend = '→';
        if (changePercent > 0.1) trend = '↗';
        else if (changePercent < -0.1) trend = '↘';
        
        processedData.push({
            date: new Date(item.ds),
            price: item.yhat,
            dailyChange: dailyChange,
            changePercent: changePercent,
            trend: trend,
            isReal: item.isReal || false,
            formattedDate: formatDate(new Date(item.ds)),
            formattedPrice: formatPrice(item.yhat, crypto),
            formattedChange: formatPrice(Math.abs(dailyChange), crypto),
            formattedPercent: changePercent.toFixed(2) + '%'
        });
    }
    
    return processedData;
}

function updateMetrics(crypto, data) {
    if (data.length === 0) return;
    
    const cryptoInfo = cryptoData[crypto];
    const currentPrice = cryptoInfo.current_price;
    const predictedPrice = data[data.length - 1].price;
    const forecastChange = ((predictedPrice - currentPrice) / currentPrice) * 100;
    const forecastPeriod = data.length;
    
    elements.currentPrice.textContent = formatPrice(currentPrice, crypto);
    elements.predictedPrice.textContent = formatPrice(predictedPrice, crypto);
    elements.forecastChange.textContent = (forecastChange >= 0 ? '+' : '') + forecastChange.toFixed(2) + '%';
    elements.forecastPeriod.textContent = forecastPeriod + ' days';
    
    // Add color classes
    elements.forecastChange.className = 'metric-value ' + (forecastChange >= 0 ? 'positive' : 'negative');
}

function updateChart(crypto, data) {
    const ctx = elements.chartCanvas.getContext('2d');
    
    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }
    
    const cryptoInfo = cryptoData[crypto];
    
    // Separate real and forecast data for dual dataset display
    const realData = data.filter(item => item.isReal);
    const forecastData = data.filter(item => !item.isReal);
    
    const datasets = [];
    
    // Add forecast dataset (always present)
    datasets.push({
        label: `${cryptoInfo.name} Forecast`,
        data: data.map(item => item.price),
        borderColor: cryptoInfo.color,
        backgroundColor: cryptoInfo.color + '20',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
        pointBackgroundColor: cryptoInfo.color,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderDash: forecastData.length > 0 ? [5, 5] : []
    });
    
    // Add real data dataset for ETH if present
    if (realData.length > 0 && crypto === 'ETH') {
        datasets.push({
            label: `${cryptoInfo.name} Real Price`,
            data: data.map(item => item.isReal ? item.price : null),
            borderColor: '#5D878F',
            backgroundColor: '#5D878F20',
            borderWidth: 3,
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#5D878F',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            spanGaps: false
        });
    }
    
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.formattedDate),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim(),
                    titleColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    bodyColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim(),
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const dataIndex = context.dataIndex;
                            const isReal = data[dataIndex] ? data[dataIndex].isReal : false;
                            const dataType = isReal ? ' (Real)' : ' (Forecast)';
                            return `Price: ${formatPrice(context.parsed.y, crypto)}${dataType}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        maxTicksLimit: 10
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                },
                y: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim(),
                        callback: function(value) {
                            return formatPrice(value, crypto);
                        }
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim() + '40'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

function updateTable(data) {
    currentPage = 1;
    renderTable(data);
    renderPagination(data);
}

function renderTable(data) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageData = data.slice(startIndex, endIndex);
    
    let html = '';
    
    pageData.forEach((item, index) => {
        const changeClass = item.changePercent > 0 ? 'positive' : item.changePercent < 0 ? 'negative' : '';
        const trendClass = item.trend === '↗' ? 'trend-up' : item.trend === '↘' ? 'trend-down' : 'trend-flat';
        const dataTypeClass = item.isReal ? 'data-real' : 'data-forecast';
        const dataTypeText = item.isReal ? 'REAL' : 'FORECAST';
        
        html += `
            <tr>
                <td>${item.formattedDate}</td>
                <td>${item.formattedPrice}</td>
                <td class="price-change ${changeClass}">
                    ${item.changePercent >= 0 ? '+' : '-'}${item.formattedChange}
                </td>
                <td class="price-change ${changeClass}">${item.formattedPercent}</td>
                <td><span class="trend-indicator ${trendClass}">${item.trend}</span></td>
                <td><span class="data-type ${dataTypeClass}">${dataTypeText}</span></td>
            </tr>
        `;
    });
    
    elements.tableBody.innerHTML = html;
    
    // Update pagination info
    const startItem = startIndex + 1;
    const endItem = Math.min(endIndex, data.length);
    elements.paginationInfo.textContent = `Showing ${startItem} - ${endItem} of ${data.length} records`;
}

function renderPagination(data) {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    let html = '';
    
    if (totalPages <= 1) {
        elements.pagination.innerHTML = '';
        return;
    }
    
    // Previous button
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            Previous
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Next button
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next
        </button>
    `;
    
    elements.pagination.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable(currentData);
        renderPagination(currentData);
    }
}

function formatPrice(price, crypto) {
    if (crypto === 'DOGE') {
        return '$' + price.toFixed(4);
    } else if (crypto === 'ETH') {
        return '$' + price.toFixed(2);
    } else {
        return '$' + price.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        });
    }
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
}

// Make changePage function global for onclick handlers
window.changePage = changePage;