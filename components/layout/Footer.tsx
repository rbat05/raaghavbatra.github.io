import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-muted/50 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Raaghav Batra</h3>
						<p className="text-sm text-muted-foreground mb-4">
							M.Sc. Chemistry Student passionate about research and innovation in chemical sciences.
						</p>
						<div className="flex space-x-4">
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Twitter size={20} />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Github size={20} />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Linkedin size={20} />
								<span className="sr-only">LinkedIn</span>
							</Link>
							<Link
								href="mailto:Raaghav Batra.karmaker@example.com"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Mail size={20} />
								<span className="sr-only">Email</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/education"
									className="text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Education
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-muted-foreground hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<p className="text-sm text-muted-foreground mb-2">
							West Bengal, India
						</p>
						<p className="text-sm text-muted-foreground mb-2">
							Raaghav Batra.karmaker@example.com
						</p>
						<p className="text-sm text-muted-foreground">
							+91 98765 43210
						</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-muted text-center">
					<p className="text-sm text-muted-foreground">
						© {currentYear} Raaghav Batra. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}