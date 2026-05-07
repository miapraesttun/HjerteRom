

export function PreferenceCard({ title = "", description = "", icon = "" }) {
    return `
        <div class="card border-0 shadow-sm mb-3 preference-card">
            <div class="card-body d-flex align-items-center">

                <div class="preference-icon me-3">
                    <i class="bi ${icon}"></i>
                </div>

                <div>
                    <h6 class="mb-1 fw-semibold">${title}</h6>
                    <p class="mb-0 text-muted small">${description}</p>
                </div>

            </div>
        </div>
    `;
}



export function GridCard({ title = "", icon = "" }) {
    return `
        <div class="card border-0 shadow-sm text-center grid-card h-100">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">

            <div class="grid-icon mb-2">
                <i class="bi ${icon}"></i>
            </div>

            <p class="mb-0 small fw-semibold">${title}</p>

            </div>
        </div>
    `;
}

export function FeatureCard({ title = "", description = "", icon = "" }) {
    return `
        <div class="card border-0 shadow-sm feature-card p-3 h-100">
            <div class="d-flex align-items-start">

                <div class="feature-icon me-3">
                    <i class="bi ${icon}"></i>
                </div>

                <div class="flex-grow-1">
                    <h6 class="fw-semibold mb-1">${title}</h6>
                    <p class="text-muted small mb-2">${description}</p>
                </div>

                <div class="feature-arrow">
                    <i class="bi bi-arrow-right"></i>
                </div>

            </div>
        </div>
    `;
}