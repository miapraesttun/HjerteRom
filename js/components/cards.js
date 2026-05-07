

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